import React from "react";
import { categories } from "../data";

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={active === category ? "active" : ""}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}