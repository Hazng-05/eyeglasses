import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
  <h3 className="footer-logo">CHUHAZNG</h3>
  <div className="footer-social-icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="/images/icon/fb.jpg" alt="Facebook" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="/images/icon/ins.jpg" alt="Instagram" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img src="/images/icon/tw.jpg" alt="Twitter" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <img src="/images/icon/in.jpg" alt="LinkedIn" />
    </a>
  </div>
</div>

      <div className="footer-column">
        <h4>Hướng dẫn mua hàng</h4>
        <ul>
          <li>Lưu Ý Nhanh</li>
          <li>Chọn Kính Theo Khuôn Mặt</li>
          <li>Tư Vấn Khúc Xạ</li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Cách thức & Quy định</h4>
        <ul>
          <li>Cách Thức Mua Hàng</li>
          <li>Cách Thức Thanh Toán</li>
          <li>Quy Định Bảo Hành & Đổi Trả</li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Sản phẩm</h4>
        <ul>
          <li>Kính râm</li>
          <li>Gọng kính cận</li>
          <li>Mẫu Kính Mới Về</li>
          <li>Gọng Kính Titanium</li>
          <li>Kính Chống Ánh Sáng Xanh</li>
          <li>Kính Đổi Màu Râm Cận</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
