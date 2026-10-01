import React, { useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import ProductDetails from "./pages/ProductDetails";
import Membership from "./pages/Membership";

import { products } from "./data";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  // -----------------------------
  // ADD PRODUCT TO CART
  // -----------------------------
  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  };

  // -----------------------------
  // CHANGE CART QUANTITY
  // -----------------------------
  const changeQuantity = (id, delta) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + delta,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // -----------------------------
  // CART COUNT
  // -----------------------------
  const cartCount = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }, [cart]);

  return (
    <div className="app">

      {/* HEADER */}
      <Header
        cartCount={cartCount}
        onCart={() => setCartOpen(true)}
        onSearch={() => setSearchOpen(true)}
      />

      {/* ROUTES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home onAdd={addToCart} />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* COLLECTION */}
        <Route
          path="/collections/:category"
          element={<Collection onAdd={addToCart} />}
        />

        {/* PRODUCT DETAILS */}
        <Route
          path="/products/:id"
          element={<ProductDetails onAdd={addToCart} />}
        />

        {/* MEMBERSHIP */}
        <Route
          path="/membership"
          element={<Membership />}
        />

        {/* FALLBACK */}
        <Route
          path="*"
          element={<Home onAdd={addToCart} />}
        />

      </Routes>

      {/* FOOTER */}
      <Footer />

      {/* CART DRAWER */}
      <CartDrawer
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        onChangeQuantity={changeQuantity}
      />

      {/* SEARCH MODAL */}
      {searchOpen && (
        <div
          className="search-modal"
          role="dialog"
          aria-modal="true"
        >

          <button
            className="search-close"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
          >
            ×
          </button>

          <div className="search-box">

            <span className="search-icon">
              ⌕
            </span>

            <input
              autoFocus
              placeholder="Search Dreamr products..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {

                  const searchValue =
                    e.currentTarget.value
                      .trim()
                      .toLowerCase();

                  if (!searchValue) return;

                  const match = products.find((product) =>
                    product.name
                      .toLowerCase()
                      .includes(searchValue)
                  );

                  if (match) {
                    setSearchOpen(false);
                    navigate(`/products/${match.id}`);
                  }
                }

                if (e.key === "Escape") {
                  setSearchOpen(false);
                }
              }}
            />

          </div>

          <p>
            Try “Obsidian”, “Imperial”, or “Marble”.
          </p>

        </div>
      )}

    </div>
  );
}