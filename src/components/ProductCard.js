// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
    
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <a href="https://www.altcademy.com/blog/how-to-link-a-button-to-another-page-in-html/" target="_blank">
          <button>Edit On Canva</button>
      </a>
      <br/>
      <a href="https://www.youtube.com/" target="_blank">
          <button>Download</button>
      </a>
    </div>
  );
}

     
export default ProductCard;