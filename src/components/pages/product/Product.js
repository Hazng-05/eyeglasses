import React from 'react';
import ProductList from './ProductList';
import Checkout from './Checkout';

function Product() {
  // Dùng ảnh theo định dạng bạn mong muốn
  const bannerImage = '/images/anhbia2.jpg';

  return (
    <section className="product-page" style={{ textAlign: 'center' }}>
      {/* Ảnh background bên trên tiêu đề */}
      <img
        src={bannerImage}
        alt="Product Banner"
        style={{
          width: '100%',
          maxHeight: '300px',
          objectFit: 'cover',
          marginBottom: '20px'
        }}
      />

      <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: 0 }}>
        CHUHAZNG STORE
      </h2>
      <p style={{ fontSize: '16px', marginTop: '10px' }}>
        Nâng tầm phong cách và thị giác cùng CHU HAZNG – nơi thời trang kết hợp cùng công năng. Mỗi sản phẩm kính mắt và kính râm cao cấp đều được trang bị tròng kính siêu mỏng, siêu nhẹ với công nghệ chống phản quang và bảo vệ tia UV tiên tiến – mang lại sự rõ nét, thoải mái và tự tin mỗi ngày.
      </p>

      <ProductList />
      <Checkout />
    </section>
  );
}

export default Product;
