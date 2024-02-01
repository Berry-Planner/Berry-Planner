// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
    
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      
      <a href={product.canva} target="_blank" rel="noreferrer">
          <button>Edit On Canva</button>
      </a>
      <br/>
      <a href= {product.download} download = {product.name}>
          <button>Download</button>
      </a>
    </div>
  );
}

     
export default ProductCard;