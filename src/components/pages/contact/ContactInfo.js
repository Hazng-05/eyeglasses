import React from 'react';
import './Contact.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2 className="contact-heading">CHUHAZNG STORE</h2>

      <div className="contact-block">
        <img src="/images/icon/mail1.png" alt="Mail Icon" />
        <div>
          <h4>Liên hệ cho sản phẩm</h4>
          <p>Nếu bạn có bất kỳ thắc mắc hay cần tư vấn thêm về sản phẩm, đừng ngần ngại liên hệ với chúng tôi. Bạn có thể gửi email hoặc gọi đến đường dây nóng để được đội ngũ chăm sóc khách hàng hỗ trợ tận tình. Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi nhu cầu của bạn, với mong muốn mang đến trải nghiệm mua sắm trọn vẹn và hài lòng nhất.</p>
        </div>
      </div>

      <div className="contact-block">
        <img src="/images/icon/hoptac.png" alt="Collab Icon" />
        <div>
          <h4>Liên hệ cộng tác / Phương tiện truyền thông</h4>
          <p>Mọi thắc mắc liên quan đến sản phẩm, quý khách vui lòng liên hệ với chúng tôi qua email hoặc đường dây nóng để được hỗ trợ kịp thời và chu đáo. Đối với các đề xuất hợp tác hoặc yêu cầu liên quan đến truyền thông, xin vui lòng gửi thông tin đến bộ phận phụ trách của chúng tôi. </p>
        </div>
      </div>

      <div className="contact-block">
        <img src="/images/icon/thongtin.png" alt="Office Icon" />
        <div>
          <h4>Chính sách bảo hành</h4>
          <p>Chúng tôi tự tin là đơn vị có chế độ hậu mãi tốt nhất Việt Nam khi áp dụng chính sách bảo hành một năm và đổi trả sản phẩm không cần lí do trong 30 ngày. Hệ thống dữ liệu được cập nhật liên tục và chính xác để dễ dàng tra cứu thông tin.</p>
        </div>
      </div>

      <div className="contact-block">
        <img src="/images/icon/home.png" alt="Office Icon 2" />
        <div>
          <h4>Thông tin & Địa chỉ</h4>
          <p>Số điện thoại: 0374999999</p>
          <p>Email: Mediachuhazng@gmail.com</p>
          <p>Tân hồng - Từ Sơn - Bắc Ninh</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
