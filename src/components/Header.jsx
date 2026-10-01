import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../data";

export default function Header({ cartCount = 0, onCart, onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">

      {/* Free Shipping Bar */}
      <div className="shipping-bar">
        <span aria-hidden="true">‹</span>

        <strong>Enjoy Free Shipping On All Orders</strong>

        <span aria-hidden="true">›</span>
      </div>

      {/* Navigation */}
      <div className="nav-wrap">

        {/* Logo */}
        <Link
          to="/"
          className="brand"
          aria-label="Dreamr home"
          onClick={closeMenu}
        >
          <span>DREAM</span>
          <b>R</b>
        </Link>

        {/* Navigation Links */}
        <nav
          className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}
        >
          <Link to="/" onClick={closeMenu}>
            HOME
          </Link>

          {Array.isArray(navItems) &&
            navItems.map(([label, path]) => (
              <Link
                key={label}
                to={path}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}

          <Link
            className="membership-link"
            to="/membership"
            onClick={closeMenu}
          >
            BUY MEMBERSHIP
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
          >
            ABOUT DREAMR
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">

          {/* Search */}
          <button
            type="button"
            onClick={onSearch}
            aria-label="Search"
          >
            ⌕
          </button>

          {/* Account */}
          <Link
            to="/login"
            aria-label="Account"
          >
            ♙
          </Link>

          {/* Cart */}
          <button
            type="button"
            onClick={onCart}
            className="cart-button"
            aria-label="Cart"
          >
            ♧

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>

        </div>
      </div>
    </header>
  );
}