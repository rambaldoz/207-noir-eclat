import React from "react";
import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { heroSlides } from "./../data/constants.jsx";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = heroSlides.length;

  const goToSlide = (index) => {
    const nextSlide = (index + slideCount) % slideCount;

    if (nextSlide === activeSlide) {
      return;
    }

    setActiveSlide(nextSlide);
  };

  const handleScrollCueClick = (event) => {
    const collection = document.querySelector("#collection");

    if (!collection) {
      return;
    }

    event.preventDefault();
    collection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (slideCount < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((index) => (index + 1) % slideCount);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [slideCount]);

  return (
    <section
      id="top"
      className="hero section-reveal"
      aria-roledescription="carousel"
      aria-label="Featured collection highlights"
    >
      <div className="hero-slides" aria-live="polite">
        {heroSlides.map((slide, index) => (
          <img
            key={`${slide.image}-${index}`}
            className={`hero-slide${index === activeSlide ? " active" : ""}`}
            src={slide.image}
            alt=""
            aria-hidden={index !== activeSlide}
          />
        ))}
      </div>
      <div className="hero-content">
        {heroSlides.map((slide, index) => (
          <div
            key={`${slide.image}-content`}
            className={`hero-panel${index === activeSlide ? " active" : ""}`}
            aria-hidden={index !== activeSlide}
          >
            <p className="eyebrow">{slide.eyebrow}</p>
            <h1>{slide.title}</h1>
            <p className="hero-copy">{slide.copy}</p>
            <a
              className="outline-button magnetic"
              href="#collection"
              tabIndex={index === activeSlide ? 0 : -1}
            >
              {slide.cta} <Icon name="arrow" />
            </a>
          </div>
        ))}
      </div>
      <div className="hero-index">
        <span>{String(activeSlide + 1).padStart(2, "0")}</span>
        <i />
        <span>{String(slideCount).padStart(2, "0")}</span>
      </div>
      {slideCount > 1 && (
        <div className="hero-controls" aria-label="Hero carousel controls">
          <button
            type="button"
            aria-label="Previous hero slide"
            onClick={() => goToSlide(activeSlide - 1)}
          >
            <Icon name="left" />
          </button>
          <div className="hero-dots" role="tablist" aria-label="Hero slides">
            {heroSlides.map((slide, index) => (
              <button
                key={`${slide.image}-${index}-dot`}
                type="button"
                className={index === activeSlide ? "active" : ""}
                role="tab"
                aria-selected={index === activeSlide}
                aria-label={`Show slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next hero slide"
            onClick={() => goToSlide(activeSlide + 1)}
          >
            <Icon name="arrow" />
          </button>
        </div>
      )}
      <a
        className="scroll-cue"
        href="#collection"
        aria-label="Scroll to collection"
        onClick={handleScrollCueClick}
      >
        <span>
          <Icon name="down" />
        </span>
        Scroll to discover
      </a>
    </section>
  );
}
