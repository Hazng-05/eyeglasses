import React from 'react';
import './AboutMilestone.css';

const AboutMilestone = () => {
  return (
    <div className="about-milestone">
      <h3>MỤC TIÊU PHÁT TRIỂN</h3>
      <div className="timeline">
        <div className="milestone-item">
          <div className="dot" />
          <h4>2025</h4>
          <p>Thành lập ở Từ Sơn</p>
        </div>
        <div className="milestone-item">
          <div className="dot" />
          <h4>2026</h4>
          <p>Mở thêm nhiều chuỗi cửa hàng tại Từ Sơn</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMilestone;
