import React from 'react'
import "../styles/product-catalog.css";
import { useState, useEffect } from "react";
import PubSub from 'pubsub-js'

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

  let topic = "ini topik"
  const publishTopic = () => {
    if (PubSub.countSubscriptions(topic) !== 0) {
      PubSub.publish(topic);
    } else {
      alert("Not subscribed.");
    }
  }
  return (
    <main>
      <div className="page-title">
        <h1>Daftar Produk</h1>
        <button onClick={publishTopic} className='buy-btn'>CEK STATUS SUBSCRIBE</button>
      </div>
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
              <div style={{ marginTop: 20, paddingRight: 30 }} className="general-credential">
                <p>{item.description}</p>
              </div>
            </div>
            <img src={item.thumbnail} />
          </div>
        )
      })}
    </main>
  );
}

export default ProductCatalog;