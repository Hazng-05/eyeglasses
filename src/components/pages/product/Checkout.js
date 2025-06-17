import React from 'react';
import products from './ProductData';
import './Checkout.css';

const Checkout = () => {
  const selectedId = localStorage.getItem('selectedProductId');
  const product = products.find(p => p.id === selectedId);

  const handleCheckout = () => {
    window.location.href = '/login';
  };

  if (!product) return <p>Không tìm thấy sản phẩm</p>;

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <img src={product.image} alt={product.name} className="checkout-image" />
    
      </div>

      <div className="checkout-right">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p className="in-stock">Còn hàng</p>
        <button className="checkout-button" onClick={handleCheckout}>THÊM VÀO GIỎ HÀNG</button>

        <div className="product-tabs">
          <span className="tab active">MÔ TẢ</span>
          <span className="tab">KÍCH THƯỚC</span>
          <span className="tab">ĐÁNH GIÁ</span>
        </div>

        <div className="product-description">
          <p>
            Mẫu kính không viền mang đến cảm giác gọn gàng và tinh tế. Kết hợp cùng càng kính kim loại mảnh, gọng kính nhẹ này tạo nên vẻ ngoài đơn giản nhưng đầy sang trọng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
