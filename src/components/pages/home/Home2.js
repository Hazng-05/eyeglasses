import React from "react";
import "./Home2.css";

const Home2 = () => {
  return (
    <div className="home2-wrapper">
      <h2 className="home2-title">Kính mắt</h2>

      <div className="home2-container">
        {/* Nam */}
        <div className="home2-column">
          <img src="/images/nam.jpg" alt="Nam" className="home2-image" />
          <p className="home2-label">Nam</p>
        </div>

        {/* Nữ */}
        <div className="home2-column">
          <img src="/images/nu.jpg" alt="Nữ" className="home2-image" />
          <p className="home2-label">Nữ</p>
        </div>

        {/* Người cao tuổi */}
        <div className="home2-column">
          <img src="/images/nguoigia.jpg" alt="Người cao tuổi" className="home2-image" />
          <p className="home2-label">Người cao tuổi</p>
        </div>

        {/* Trẻ em */}
        <div className="home2-column">
          <img src="/images/trecon.jpg" alt="Trẻ em" className="home2-image" />
          <p className="home2-label">Trẻ em</p>
        </div>

        {/* Tròng kính */}
        <div className="home2-column">
          <img src="/images/kinh.jpg" alt="Kính" className="home2-image" />
          <p className="home2-label">Tròng kính</p>
          <ul className="home2-list">
            <li>• Chỉ số cao</li>
            <li>• Lọc ánh sáng xanh tốt</li>
            <li>• Tiến độ nhanh</li>
            <li>• Xu thế thời trang hàng đầu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home2;
