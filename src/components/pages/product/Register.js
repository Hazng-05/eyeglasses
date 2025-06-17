import React from 'react';
import './Register.css';

const Register = () => {
  const handleLoginRedirect = () => {
    window.location.href = '/login';
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2 className="form-title">Đăng ký</h2>
        <p className="form-subtitle">Tạo tài khoản để tiếp tục mua sắm</p>

        <form className="register-form">
          <label>Họ và tên</label>
          <input type="text" required />

          <label>Email</label>
          <input type="email" required />

          <label>Mật khẩu</label>
          <input type="password" required />

          <button type="submit" className="register-button">ĐĂNG KÝ</button>
        </form>

        <p className="redirect-text">
          Bạn đã có tài khoản?{' '}
          <span className="login-link" onClick={handleLoginRedirect}>
            Đăng nhập tại đây
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
