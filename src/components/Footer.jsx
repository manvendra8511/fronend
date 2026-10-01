import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="service-strip">
        <div><span>◉</span><h3>Customer Service</h3><p>Mon To Sat (10AM - 7PM IST)</p></div>
        <div><span>⌁</span><h3>Free Shipping</h3><p>Enjoy Free Shipping On Every Order.</p></div>
        <div><span>✓</span><h3>Secure Payment</h3><p>Your Payment Information Is Processed Securely</p></div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">DREAM<span>R</span></div>
          <p>Live The Dream</p>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faqs">FAQs</Link>
        </div>

        <div>
          <h4>INFO</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/refund">Refund & Return Policy</Link>
          <Link to="/shipping">Shipping Policy</Link>
          <a href="https://app-v1.shipway.com/auth/buyer/" target="_blank" rel="noreferrer">Track My Order</a>
        </div>

        <div>
          <h4>CONNECT WITH US</h4>
          <p>DREAMR</p>
          <p>RADHE RADHE TRADERS</p>
          <p>B-44 Samadhiya Colony Lashkar Gwalior, 474001 Madhya Pradesh</p>
          <a href="mailto:info@dreamrindia.com">info@dreamrindia.com</a>
          <a href="https://www.instagram.com/dreamrindia/" target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
      </div>

      <div className="copyright">Copyright © 2026, Dreamr</div>
    </footer>
  );
}