import React from 'react'
import "../styles/product-catalog.css";
import { useState, useEffect } from "react";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://dummyjson.com/products')
      let data = await res.json();
      setProducts(data.products);
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1 className="page-title">Daftar Produk</h1>
      {products.map(item => {
        return (
          <div key={item.id} className="product-card">
            <div className="product-desc-wrapper">
              <h1 className="product-title">{item.title}</h1>
              <div className="general-credential">
                <p className="credential">Brand</p>
                <p>: {item.brand}</p>
              </div>
              <div className="general-credential">
                <p className="credential">Price</p>
                <p>: {item.price}</p>
              </div>
              <div className="general-credential">
                <p className="credential">Rating</p>
                <p>: {item.rating}</p>
              </div>
              <div className="general-credential">
                <p className="credential">Stock</p>
                <p>: {item.stock}</p>
              </div>
              <p className="product-desc">{item.description}</p>
            </div>
            <img src={item.thumbnail} />
          </div>
        )
      })}
    </main>
  );
}

export default ProductCatalog;