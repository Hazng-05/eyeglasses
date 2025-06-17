import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const handleClick = () => {
    localStorage.setItem('selectedProductId', product.id);
    window.location.href = '/checkout';
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} USD</p>
      {!product.inStock && <span className="out-of-stock">Hết hàng</span>}
    </div>
  );
};

export default ProductCard;
