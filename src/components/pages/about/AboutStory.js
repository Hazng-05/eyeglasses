import React from 'react';
import './AboutStory.css';

const AboutStory = () => {
  return (
    <div className="about-story">
      <div className="story-content">
        <div className="story-text">
          <h3>CÂU CHUYỆN CỦA CHÚNG TÔI</h3>
          <p>
            Lấy cảm hứng từ những quảng cáo có cánh – những thước phim gợi mở cảm xúc và đậm chất nghệ thuật – chúng tôi không chỉ tạo ra những chiếc kính mắt đơn thuần, mà là những tuyên ngôn phong cách. Thương hiệu hướng đến việc kiến tạo nên những thiết kế thanh lịch, mang đậm dấu ấn cá nhân, phù hợp với lối sống tối giản hiện đại nhưng vẫn tràn đầy cảm hứng. Mỗi sản phẩm là sự kết hợp hài hòa giữa vật liệu cao cấp, kiểu dáng tinh gọn và tinh thần tự do, giúp người đeo không chỉ nhìn rõ hơn, mà còn thể hiện được khí chất riêng biệt. Chúng tôi tin rằng, một chiếc kính đẹp không chỉ làm nổi bật gương mặt, mà còn nâng tầm phong cách sống.
          </p>
        </div>
        <div className="story-image">
          <img src="/images/kinh/22.jpg" alt="Eyewear story" />
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
