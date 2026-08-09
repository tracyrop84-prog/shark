import { useState } from "react";

import ProductCard from "./ProductCard";


const products = [
  {
    id: 1,
    title: "Laptop",
    category: "Electronics",
    price: "$999",
    image: "laptop.jpg",
  },
  {
    id: 2,
    title: "Coffee Maker",
    category: "Home Appliances",
    price: "$49",
    image: "coffee-maker.jpg",
  },
  {
    id: 3,
    title: "Headphones",
    category: "Electronics",
    price: "$199",
    image: "headphones.jpg",
  },
];
function App() {
  const [filter, setFilter] = useState("");
  return (
    <>
      <h1>ShopEase Product Catalog</h1>
  {products.map((product) => (
  <ProductCard
    key={product.id}
    title={product.title}
    price={product.price}
  />
))}
    </>
  );
}

export default App;
