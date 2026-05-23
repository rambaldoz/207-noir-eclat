import React, { useEffect, useState } from "react";
import Hero from "./components/Hero.jsx";
import Icon from "./components/Icon.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Brands from "./components/Brands.jsx";
import { brands, products, lookbook, lookbookTabs, testimonials, navItems } from "./data/constants.jsx";

function Header({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const handleHomeClick = () => {
    closeMenu();
    closeSearch();
    onNavigate("home");
  };

  const handleNavClick = (event, item) => {
    event.preventDefault();
    closeMenu();
    closeSearch();
    onNavigate("home", item === "Home" ? "top" : item.toLowerCase());
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <header className={`site-header ${currentPage !== "home" ? "site-header-solid" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <a className="brand" href="#top" aria-label="NOIR ÉCLAT home" onClick={handleHomeClick}>
        <img src="/assets/logo.png" alt="" />
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={(event) => handleNavClick(event, item)}>
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions" aria-label="Store actions">
        <button
          type="button"
          aria-label={isSearchOpen ? "Close search" : "Search"}
          aria-expanded={isSearchOpen}
          onClick={() => {
            closeMenu();
            setIsSearchOpen((open) => !open);
          }}
        >
          <Icon name={isSearchOpen ? "close" : "search"} />
        </button>
        <button
          type="button"
          aria-label="Account"
          onClick={() => {
            closeMenu();
            closeSearch();
            onNavigate("login");
          }}
        >
          <Icon name="user" />
        </button>
        <button
          type="button"
          aria-label="Shopping bag"
          className="bag-button"
          onClick={() => {
            closeMenu();
            closeSearch();
            onNavigate("cart");
          }}
        >
          <Icon name="bag" />
          <span>0</span>
        </button>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="menu-toggle"
          onClick={() => {
            closeSearch();
            setIsMenuOpen((open) => !open);
          }}
        >
          <Icon name={isMenuOpen ? "close" : "menu"} />
        </button>
      </div>
      <button
        type="button"
        className="menu-backdrop"
        aria-label="Close menu"
        onClick={closeMenu}
      />
    </header>
    <aside className={`search-panel ${isSearchOpen ? "open" : ""}`} aria-hidden={!isSearchOpen}>
      <form className="search-form" role="search" onSubmit={handleSearchSubmit}>
        <label htmlFor="site-search">Search Noir Eclat</label>
        <div>
          <input
            id="site-search"
            type="search"
            value={searchQuery}
            placeholder="Search jewelry, perfume, or styling"
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button type="submit" aria-label="Submit search">
            <Icon name="search" />
          </button>
        </div>
      </form>
      <button type="button" className="search-close" aria-label="Close search" onClick={closeSearch}>
        <Icon name="close" />
      </button>
    </aside>
    </>
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
          NOIR ÉCLAT is more than a brand. It is a philosophy of elegance,
          refinement, and intentional living. Each piece is crafted with
          precision, using rare materials and timeless techniques passed down
          through generations. We don't follow trends. We create timeless pieces of individuality.
        </p>
        <a className="outline-button" href="#our-story">
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

  useEffect(() => {
    if (testimonials.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveTestimonial((index) => (index + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

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
            <img src="/assets/logo.png" alt="" />
          </a>
          <p>
            Timeless elegance. Rare craftsmanship. Made for those who notice
            details others overlook.
          </p>
          <div className="socials" aria-label="Social links">
            <a href="https://www.instagram.com" aria-label="Instagram">
              <Icon name="instagram" />
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook">
              <Icon name="facebook" />
            </a>
            <a href="https://www.pinterest.com" aria-label="Pinterest">
              <Icon name="pinterest" />
            </a>
            <a href="https://www.tiktok.com" aria-label="TikTok">
              <Icon name="tiktok" />
            </a>
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
          <div>
            <h3>Quick Links</h3>
            <a href="#top">Home</a>
            <a href="#collection">Collection</a>
            <a href="#story">Our Story</a>
            <a href="#lookbook">Lookbook</a>
            <a href="#journal">Journal</a>
          </div>
          <div>
            <h3>Customer Care</h3>
            <a href="#shipping">Shipping & Delivery</a>
            <a href="#returns">Returns & Exchanges</a>
            <a href="#faqs">FAQs</a>
            <a href="#care-guide">Care Guide</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 NOIR ÉCLAT. All rights reserved.</span>
        <ul>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-and-conditions">Terms & Conditions</a></li>
        </ul>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Collection />
      <Story />
      <Lookbook />
      <SocialProof />
    </main>
  );
}

function LoginPage({ onNavigateHome }) {
  return (
    <main className="mock-page auth-page section-reveal">
      <section className="mock-page-panel">
        <p className="eyebrow">Client Profile</p>
        <h1>Welcome Back</h1>
        <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Email Address
            <input type="email" placeholder="client@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>
          <button type="submit" className="outline-button">
            Sign In <Icon name="arrow" />
          </button>
        </form>
        <button type="button" className="text-link mock-page-link" onClick={onNavigateHome}>
          Back to Collection
        </button>
      </section>
    </main>
  );
}

function CartPage({ onNavigateHome }) {
  return (
    <main className="mock-page cart-page section-reveal">
      <section className="mock-page-panel empty-cart">
        <div className="empty-cart-icon">
          <Icon name="bag" />
          <span>0</span>
        </div>
        <p className="eyebrow">Shopping Bag</p>
        <h1>Your Bag Is Empty</h1>
        <p>Explore the collection and choose a piece to begin your order.</p>
        <button type="button" className="outline-button" onClick={onNavigateHome}>
          Explore Collection <Icon name="arrow" />
        </button>
      </section>
    </main>
  );
}

function AppContent({ page, onNavigate }) {
  if (page === "login") {
    return <LoginPage onNavigateHome={() => onNavigate("home", "collection")} />;
  }

  if (page === "cart") {
    return <CartPage onNavigateHome={() => onNavigate("home", "collection")} />;
  }

  return <HomePage />;
}

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (nextPage, targetId = "top") => {
    setPage(nextPage);

    if (nextPage !== "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.requestAnimationFrame(() => {
      const target = document.querySelector(`#${targetId}`);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  return (
    <>
      <Header currentPage={page} onNavigate={navigate} />
      <AppContent page={page} onNavigate={navigate} />
      <Footer />
    </>
  );
}
