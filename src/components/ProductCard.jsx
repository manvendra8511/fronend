import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-wrap">
        <span className="new-badge">New</span>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <Link to={`/products/${product.id}`} className="product-name">{product.name}</Link>
        <div className="product-price">₹{product.price.toLocaleString("en-IN")}.00</div>
        <button className="add-button" onClick={() => onAdd(product)}>ADD TO CART</button>
      </div>
    </article>
  );
}