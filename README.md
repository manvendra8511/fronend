# Dreamr React Frontend

A from-scratch React/Vite e-commerce frontend based on the supplied Dreamr India reference designs and public site content.

## Stack

- React
- Vite
- React Router
- HTML/CSS
- Responsive CSS
- Component-based architecture

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Main structure

- `src/components/Header.jsx` – responsive navigation
- `src/components/ProductCard.jsx` – reusable product card
- `src/components/ProductGrid.jsx` – product listing
- `src/components/CategoryTabs.jsx` – collection filters
- `src/components/CartDrawer.jsx` – cart interaction
- `src/pages/Home.jsx` – landing page
- `src/pages/About.jsx` – company about page
- `src/pages/Collection.jsx` – collection listing
- `src/pages/ProductDetails.jsx` – product details
- `src/data.js` – product/category data
- `src/styles.css` – complete responsive styling

The product images currently point to Dreamr's public Shopify CDN assets. For a production deployment, move approved company assets into `public/assets` and update `src/data.js`.
