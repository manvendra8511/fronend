import { Link, useParams } from "react-router-dom";
import { products } from "../data";
import { useState } from "react";

export default function ProductDetails({ onAdd }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id)) || products[0];
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="product-page">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail-copy">
        <Link className="back-link" to="/">← Back to shop</Link>
        <p className="eyebrow">{product.category}</p>
        <h1>{product.name}</h1>
        <div className="detail-price">₹{product.price.toLocaleString("en-IN")}.00</div>
        <p className="detail-description">{product.description}</p>

        <div className="feature-row">
          <span>Premium Comfort</span>
          <span>Elegant Designs</span>
          <span>Soft Fabrics</span>
        </div>

        <div className="quantity large">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <button
          className="detail-add"
          onClick={() => {
            for (let i = 0; i < quantity; i++) onAdd(product);
          }}
        >
          ADD TO CART
        </button>

        <div className="detail-sections">
          <details open><summary>DESCRIPTION</summary><p>{product.description}</p></details>
          <details><summary>WHAT'S INCLUDED</summary><p>1 King Size Flat Bedsheet + 2 Matching Pillow Covers.</p></details>
          <details><summary>PRODUCT FEATURES</summary><p>Deep pocket fit, fade-resistant print, breathable comfort, premium finish and easy care.</p></details>
          <details><summary>RETURN POLICY</summary><p>7-Day Easy Return & Replacement for manufacturing defects and transit damage.</p></details>
        </div>
      </div>
    </main>
  );
}