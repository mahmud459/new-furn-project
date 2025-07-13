
import React from 'react';
import ProductCard from './ProdactsCard';

function ProductList({ products, addToCart }) {
  if (!products || products.length === 0) {
    return <p className="text-center text-muted">No products available.</p>;
  }

  return (
    <div className="row gy-3 ">
      {products.map((product) => (
        <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
          <ProductCard product={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;

