import { Link, useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data";

export default function Collection({ onAdd }) {
  const { category = "dreamroyal" } = useParams();
  const label = category.toUpperCase();
  const collectionProducts = products.filter((p) => p.category === label);
  const displayProducts = collectionProducts.length ? collectionProducts : products;

  return (
    <main className="collection-page">
      <section className="collection-heading">
        <p className="eyebrow">SHOP COLLECTION</p>
        <h1>{label}</h1>
        <p>Explore Dreamr's curated bedding collection.</p>
      </section>
      <div className="breadcrumb"><Link to="/">Home</Link> / {label}</div>
      <ProductGrid products={displayProducts} onAdd={onAdd} />
    </main>
  );
}