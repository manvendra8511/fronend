import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CategoryTabs from "../components/CategoryTabs";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data";

export default function Home({ onAdd }) {
  const [category, setCategory] = useState("DREAMROYAL");

  const filtered = products.filter(
    (p) => p.category === category
  );

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span>NEW</span> PREMIUM COLLECTION
          </div>

          <h1>
            FLORAL <em>Percale Cotton</em>
            <br />
            <strong>BEDSPREAD SET</strong>
          </h1>

          <div className="hero-offer">
            <span></span>
            <b>30% OFF FOR</b> <i>Everyone</i>
          </div>

          <Link
            to="/collections/dreamnature"
            className="hero-button"
          >
            SHOP NOW <span>▶</span>
          </Link>
        </div>

        <div className="hero-product">
          <img
            src="https://dreamrindia.com/cdn/shop/files/1_c9c62f5f-ad5d-44e7-836e-5e621484fb45.png?v=1786951195&width=1000"
            alt="Dreamr luxury bedsheet"
          />

          <div className="offer-circle">
            <b>
              BUY 1
              <br />
              GET 1
            </b>
            <small>FOR MEMBERS</small>
          </div>
        </div>

        <div className="hero-dots">
          <span></span>
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Bestsellers</h2>
        </div>

        <CategoryTabs
          active={category}
          onChange={setCategory}
        />

        <ProductGrid
          products={filtered}
          onAdd={onAdd}
        />

        <div className="view-all">
          <Link
            to={`/collections/${category.toLowerCase()}`}
          >
            View All
          </Link>
        </div>
      </section>

      <section className="membership-banner">
        <div>
          <p className="eyebrow">DREAMR MEMBERSHIP</p>

          <h2>Buy 1 get 1 free</h2>

          <p>
            Unlock exclusive member savings across Dreamr
            collections.
          </p>

          <Link to="/membership">
            GET YOUR FREE MEMBERSHIP
          </Link>
        </div>

        <div className="membership-card">
          <span>WITH MEMBERSHIP</span>
          <strong>BUY 1, GET 1 FREE</strong>
        </div>
      </section>
    </main>
  );
}