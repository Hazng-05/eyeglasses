import React from "react";
import "./Home1.css";

const Home1 = () => {
  const backgroundImageUrl = "/images/anhbia1.jpg"; // Thay thế bằng tên file hình ảnh thực tế

  return (
    <div
      className="home1-container"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      role="img"
      aria-label="Background with text TÔN VINH, VẺ ĐẸP, ĐÔI MẮT BẠN aligned right"
    >
      <div className="home1-text">
        {`TÔN VINH
VẺ ĐẸP
ĐÔI MẮT BẠN`}
      </div>
    </div>
  );
};

export default Home1;
