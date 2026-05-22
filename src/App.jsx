import React from "react";
import Hero from "./components/Hero.jsx";
import Icon from "./components/Icon.jsx";

const products = [
  {
    name: "Noir Diamond Ring",
    price: "$3,800",
    image: "/assets/products/product-ring.png",
  },
  {
    name: "Eclat Gold Bracelet",
    price: "$2,450",
    image: "/assets/products/product-bracelet.png",
  },
  {
    name: "Velvet Oud Perfume",
    price: "$250",
    image: "/assets/products/product-perfume.png",
  },
  {
    name: "Midnight Pearl Necklace",
    price: "$2,950",
    image: "/assets/products/product-necklace.png",
  },
];

const lookbook = [
  { image: "/assets/lookbook/lookbook-01.png", label: "Layered gold styling" },
  { image: "/assets/lookbook/lookbook-02.png", label: "Noir parfum study" },
  { image: "/assets/lookbook/lookbook-03.png", label: "Evening silhouette" },
  { image: "/assets/lookbook/lookbook-04.png", label: "Fine jewelry details" },
  { image: "/assets/lookbook/lookbook-05.png", label: "Private salon mood" },
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

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt="" loading="lazy" />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <a href="#contact">
          View Details <Icon name="arrow" />
        </a>
      </div>
    </article>
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
        <img src="/assets/story.png" alt="" loading="lazy" />
      </div>
      <div className="story-copy">
        <p className="eyebrow">Our Story</p>
        <h2>Crafted for Those Who Notice Details</h2>
        <p>
          NOIR ECLAT is more than a brand. It is a philosophy of elegance,
          refinement, and intentional living. Each piece is crafted with
          precision, using rare materials and timeless techniques passed down
          through generations.
        </p>
        <a className="outline-button" href="#journal">
          Discover Our Story <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}

function Lookbook() {
  return (
    <section id="lookbook" className="section lookbook section-reveal">
      <p className="eyebrow">The Lookbook</p>
      <h2>A World of Inspiration</h2>
      <div className="tabs" aria-label="Lookbook categories">
        {["All", "Jewelry", "Perfume", "Lifestyle"].map((tab, index) => (
          <button className={index === 0 ? "active" : ""} key={tab} type="button">
            {tab}
          </button>
        ))}
      </div>
      <div className="lookbook-grid">
        {lookbook.map((item) => (
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
  return (
    <section className="proof section-reveal">
      <div>
        <p className="eyebrow">As Seen In</p>
        <div className="press-logos" aria-label="Publication logos">
          <span>VOGUE</span>
          <span>BAZAAR</span>
          <span>ELLE</span>
          <span>Forbes</span>
        </div>
      </div>
      <div className="testimonial">
        <p className="eyebrow">What Our Clients Say</p>
        <blockquote>
          “NOIR ECLAT feels less like a brand and more like an atmosphere.”
        </blockquote>
        <cite>- Sophia L.</cite>
        <div className="dots" aria-hidden="true">
          <span />
          <span />
          <span />
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
