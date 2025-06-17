import React from 'react';
import './AboutMission.css';

const AboutMission = () => {
  return (
    <div className="about-mission">
      <div className="mission-item">
        <div className="title-with-icon">
          <img src="/images/icon/mis.png" alt="Mission Icon" className="icon" />
          <h3>NHIỆM VỤ</h3>
        </div>
        <p>
          Cam kết cung cấp sản phẩm chất lượng cao,<br />
          nâng cao phong cách của khách hàng.
        </p>
      </div>

      <div className="mission-item">
        <div className="title-with-icon">
          <img src="/images/icon/tich.png" alt="Vision Icon" className="icon" />
          <h3>TẦM NHÌN</h3>
        </div>
        <p>
          Trở thành người dẫn đầu<br />
          thương hiệu tối giản<br />
          thiết kế kính mắt.
        </p>
      </div>

      <div className="mission-item">
        <div className="title-with-icon">
          <img src="/images/icon/tich.png" alt="Core Values Icon" className="icon" />
          <h3>GIÁ TRỊ CỐT LÕI</h3>
        </div>
        <ul>
          <li>Chủ nghĩa tối giản</li>
          <li>Chất lượng</li>
          <li>Thân thiện với môi trường</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMission;
