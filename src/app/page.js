"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import "./page.css"; 

export default function Page() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [category, setCategory] = useState("all");
  const [priceLimit, setPriceLimit] = useState(200);

 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  const addToCart = (product) => setCart([...cart, product]);
  const addToWishlist = (product) => setWishlist([...wishlist, product]);

  const applyFilters = () => {
    let result = products;

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    result = result.filter((p) => p.price <= priceLimit);

    setFiltered(result);
  };

  return (
    <>
      <Header cartCount={cart.length} wishlistCount={wishlist.length} />

      <div className="page-container">
       
        <div className="filter-container">
          <h2 className="filter-title">Filters</h2>

          <div className="filter-box">
            
            <div className="filter-section">
              <label className="filter-label">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                <option value="men's clothing">Men</option>
                <option value="women's clothing">Women</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
              <div className="filter-section">
              <label className="filter-label">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                <option value="men's clothing">Men</option>
                <option value="women's clothing">Women</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
              <div className="filter-section">
              <label className="filter-label">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                <option value="men's clothing">Men</option>
                <option value="women's clothing">Women</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
              <div className="filter-section">
              <label className="filter-label">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                <option value="men's clothing">Men</option>
                <option value="women's clothing">Women</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
              <div className="filter-section">
              <label className="filter-label">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                <option value="men's clothing">Men</option>
                <option value="women's clothing">Women</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
              <div className="filter-section">
              <label className="filter-label">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                <option value="men's clothing">Men</option>
                <option value="women's clothing">Women</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
              <div className="filter-section">
              <label className="filter-label">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                <option value="men's clothing">Men</option>
                <option value="women's clothing">Women</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
              <div className="filter-section">
              <label className="filter-label">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                <option value="men's clothing">Men</option>
                <option value="women's clothing">Women</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>

           
            <div className="filter-section">
              <label className="filter-label">
                Max Price: <span>${priceLimit}</span>
              </label>

              <input
                type="range"
                min="10"
                max="500"
                value={priceLimit}
                onChange={(e) => setPriceLimit(e.target.value)}
                className="filter-range"
              />
            </div>

            <button className="apply-btn" onClick={applyFilters}>
              Apply Filters
            </button>
          </div>
        </div>

        <div className="content-area">
          <h2 className="section-title">Deals (Items under $50)</h2>

          <div className="products-grid">
            {products
              .filter((p) => p.price < 50)
              .map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  addToCart={addToCart}
                  addToWishlist={addToWishlist}
                />
              ))}
          </div>

          <h2 className="section-title">Products</h2>

          <div className="products-grid">
            {filtered.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
