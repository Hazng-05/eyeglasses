import React from "react";
import "./Home3.css";

const Home3 = () => {
  return (
    <div className="home3-wrapper">
      <h2 className="home3-title">Tiện ích dành cho bạn</h2>

      <div className="home3-container">
        <div className="home3-column">
          <img src="/images/kiemtra.jpg" alt="Kiểm tra khoảng cách đồng tử" />
          <p>Kiểm tra<br />khoảng cách đồng tử</p>
        </div>

        <div className="home3-column">
          <img src="/images/hethong.jpg" alt="Hệ thống cửa hàng" />
          <p>Hệ thống cửa hàng<br />có mặt mọi nơi</p>
        </div>

        <div className="home3-column">
          <img src="/images/matkinh.jpg" alt="Tìm kính phù hợp" />
          <p>Tìm kính phù hợp<br />cho từng đối tượng</p>
        </div>
      </div>
    </div>
  );
};

export default Home3;
