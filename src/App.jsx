import React, { useState } from "react";
import Hero from "./components/Hero.jsx";
import Icon from "./components/Icon.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Brands from "./components/Brands.jsx";

const brands = [
  {
    name: "vogue",
    image: "/assets/brands/brand-vogue.webp",
  },
  {
    name: "bazaar",
    image: "/assets/brands/brand-bazaar.webp",
  },
  {
    name: "elle",
    image: "/assets/brands/brand-elle.webp",
  },
  {
    name: "forbes",
    image: "/assets/brands/brand-forbes.webp",
  }
];

const products = [
    {
        name: "Noir Diamond Ring",
        price: "$3,800",
        image: "/assets/products/noir-diamond-ring.webp",
    },
    {
        name: "Eclat Gold Bracelet",
        price: "$2,450",
        image: "/assets/products/eclat-gold-bracelet.webp",
    },
    {
        name: "Velvet Oud Perfume",
        price: "$250",
        image: "/assets/products/velvet-oud-perfume.webp",
    },
    {
        name: "Midnight Pearl Necklace",
        price: "$2,950",
        image: "/assets/products/midnight-pearl-necklace.webp",
    },
];


const lookbook = [
  {
    image: "/assets/lookbook/layered-gold-styling.webp",
    label: "Layered gold styling",
    category: "Jewelry",
  },
  {
    image: "/assets/lookbook/noir-parfum-study.webp",
    label: "Noir parfum study",
    category: "Perfume",
  },
  {
    image: "/assets/lookbook/evening-silhouette.webp",
    label: "Evening silhouette",
    category: "Lifestyle",
  },
  {
    image: "/assets/lookbook/fine-jewelry-details-1.webp",
    label: "Fine jewelry details 1",
    category: "Jewelry",
  },
  {
    image: "/assets/lookbook/fine-jewelry-details-2.webp",
    label: "Fine jewelry details 2",
    category: "Jewelry",
  },
  {
    image: "/assets/lookbook/private-salon-mood.webp",
    label: "Private salon mood",
    category: "Lifestyle",
  },
];

const lookbookTabs = ["All", "Jewelry", "Perfume", "Lifestyle"];

const testimonials = [
  {
    quote: "NOIR ECLAT feels less like a brand and more like an atmosphere.",
    author: "Sophia L.",
  },
  {
    quote: "Every piece feels considered, intimate, and beautifully made.",
    author: "Amara K.",
  },
  {
    quote: "The perfume lingers with the same quiet elegance as their jewelry.",
    author: "Celeste M.",
  },
];

const navItems = ["Home", "Collection", "Story", "Lookbook", "Journal", "Contact"];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="NOIR ECLAT home">
        <span className="brand-mark">◇</span>
        <span>NOIR ECLAT</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions" aria-label="Store actions">
        <button type="button" aria-label="Search">
          <Icon name="search" />
        </button>
        <button type="button" aria-label="Account">
          <Icon name="user" />
        </button>
        <button type="button" aria-label="Shopping bag" className="bag-button">
          <Icon name="bag" />
          <span>0</span>
        </button>
      </div>
    </header>
  );
}

function Collection() {
  return (
    <section id="collection" className="section products section-reveal">
      <p className="eyebrow">Featured Products</p>
      <div className="section-heading">
        <h2>Iconic Creations</h2>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
      <a className="text-link" href="#lookbook">
        View All Products
      </a>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="story section-reveal">
      <div className="story-image">
        <img src="/assets/story.webp" alt="" loading="lazy" />
      </div>
      <div className="story-copy">
        <p className="eyebrow">Our Story</p>
        <h2>Crafted for Those Who Notice Details</h2>
        <p>
          NOIR ECLAT is more than a brand. It is a philosophy of elegance,
          refinement, and intentional living. Each piece is crafted with
          precision, using rare materials and timeless techniques passed down
          through generations. We don't follow trends. We create timeless pieces of individuality.
        </p>
        <a className="outline-button" href="#journal">
          Discover Our Story <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}

function Lookbook() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredLookbook =
    activeTab === "All"
      ? lookbook
      : lookbook.filter((item) => item.category === activeTab);

  return (
    <section id="lookbook" className="section lookbook section-reveal">
      <p className="eyebrow">The Lookbook</p>
      <h2>A World of Inspiration</h2>
      <div className="tabs" aria-label="Lookbook categories">
        {lookbookTabs.map((tab) => (
          <button
            className={activeTab === tab ? "active" : ""}
            key={tab}
            type="button"
            aria-pressed={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div key={activeTab} className={`lookbook-grid ${activeTab !== "All" ? "filtered" : ""}`}>
        {filteredLookbook.map((item) => (
          <figure key={item.label}>
            <img src={item.image} alt="" loading="lazy" />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function SocialProof() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentTestimonial = testimonials[activeTestimonial];

  const goToTestimonial = (index) => {
    setActiveTestimonial((index + testimonials.length) % testimonials.length);
  };

  return (
    <section className="proof section-reveal">
      {/* brands */}
      <div>
        <p className="eyebrow">As Seen In</p>
        <div className="press-logos" aria-label="Publication logos">
          {brands.map((brand) => (
            <Brands key={brand.name} brand={brand}/>
          ))}
        </div>
      </div>
      {/* testimonials */}
      <div className="testimonial">
        <div className="testimonial-header">
          <p className="eyebrow">What Our Clients Say</p>
          {/* <div className="testimonial-controls" aria-label="Testimonial controls">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goToTestimonial(activeTestimonial - 1)}
            >
              <Icon name="left" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goToTestimonial(activeTestimonial + 1)}
            >
              <Icon name="arrow" />
            </button>
          </div> */}
        </div>
        <div className="testimonial-quote">
          <img src="/assets/icon-quote.png" alt="quote" />
        </div>
        <div key={activeTestimonial} className="testimonial-slide">
          <blockquote>{currentTestimonial.quote}</blockquote>
          <cite>- {currentTestimonial.author}</cite>
        </div>
        <div className="dots" role="tablist" aria-label="Testimonials">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.author}
              type="button"
              className={index === activeTestimonial ? "active" : ""}
              role="tab"
              aria-selected={index === activeTestimonial}
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-grid">
        <div>
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">◇</span>
            <span>NOIR ECLAT</span>
          </a>
          <p>
            Timeless elegance. Rare craftsmanship. Made for those who notice
            details others overlook.
          </p>
          <div className="socials" aria-label="Social links">
            <a href="#contact">ig</a>
            <a href="#contact">fb</a>
            <a href="#contact">pt</a>
            <a href="#contact">tk</a>
          </div>
        </div>
        <div>
          <h3>Newsletter</h3>
          <p>
            Be the first to discover new collections, exclusive offers, and
            private events.
          </p>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="submit" aria-label="Submit newsletter">
              <Icon name="arrow" />
            </button>
          </form>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="#top">Home</a>
          <a href="#collection">Collection</a>
          <a href="#story">Our Story</a>
          <a href="#lookbook">Lookbook</a>
          <a href="#journal">Journal</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h3>Customer Care</h3>
          <a href="#contact">Shipping & Delivery</a>
          <a href="#contact">Returns & Exchanges</a>
          <a href="#contact">FAQs</a>
          <a href="#contact">Care Guide</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 NOIR ECLAT. All rights reserved.</span>
        <span>Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;Terms & Conditions</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collection />
        <Story />
        <Lookbook />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
