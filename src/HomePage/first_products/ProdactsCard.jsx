import React from 'react';
import styles from '../Home/home.module.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className={`${styles.prodects_Card} card shadow border-0`}>
      <img
        src={product.image}
        className="card-img-top img-fluid"
        alt={product.name || "Product Image"}
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <p className="fw-bold">${product.price}</p>
        <button
          className="btn "
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
