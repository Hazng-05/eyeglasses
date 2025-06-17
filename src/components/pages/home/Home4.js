import React from "react";
import "./Home4.css";

const Home4 = () => {
  return (
    <div className="home4-container">
      <h2 className="home4-title">TIN TỨC & SỰ KIỆN</h2>
      <p className="home4-subtitle">Cập nhật những hoạt động, ưu đãi và sự kiện mới nhất tại CHUHAZNG STORE</p>

      <div className="home4-grid">
        <div className="home4-item">
          <img src="/images/bosuutap.png" alt="Tin tức 1" />
          <p>🎉 Ra mắt bộ sưu tập <strong>“Tầm nhìn đô thị 2025”</strong></p>
        </div>

        <div className="home4-item">
          <img src="/images/sale.png" alt="Tin tức 2" />
          <p>🔥 <strong>Khuyến mại hè</strong> áp dụng toàn bộ sản phẩm</p>
        </div>

        <div className="home4-item">
          <img src="/images/kham.png" alt="Tin tức 3" />
          <p>👁️‍🗨️ Workshop <strong>chăm sóc mắt miễn phí</strong> tại Từ Sơn</p>
        </div>
      </div>
    </div>
  );
};

export default Home4;
