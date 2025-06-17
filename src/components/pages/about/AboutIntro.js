import React from 'react';
import './AboutIntro.css';

const AboutIntro = () => {
  return (
    <div className="about-intro">
      <div className="intro-left">
        <h1>
          CHU HAZNG<br />STORE
        </h1>
        <p>
          Chúng tôi là thương hiệu kính mắt thời trang mang phong cách sang trọng, kết hợp tinh tế giữa chất liệu cao cấp và thiết kế tối giản. Mỗi sản phẩm là sự hòa quyện giữa nghệ thuật thủ công và gu thẩm mỹ hiện đại, hướng đến vẻ đẹp thanh lịch và đẳng cấp vượt thời gian.
        </p>
      </div>
      <div className="intro-right">
        <img src="/images/kinh/21.jpg" alt="Eyewear model" />
      </div>
    </div>
  );
};

export default AboutIntro;
