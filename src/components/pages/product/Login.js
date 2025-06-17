import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterRedirect = () => {
    window.location.href = '/register';
  };

  const handleLogin = e => {
    e.preventDefault();
    // Logic đăng nhập tại đây
    alert('Đăng nhập thành công!');
  };

  return (
    <div className="login-container">
      <h2 className="welcome-title">KHÁM PHÁ<br />CHUHAZNG STORE</h2>

      <form className="login-form" onSubmit={handleLogin}>
        <h3 className="form-title">Đăng nhập</h3>
        <p className="form-subtitle">
          Chào mừng bạn trở lại. Vui lòng đăng nhập vào tài khoản của bạn.
        </p>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label>Mật khẩu</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit">ĐĂNG NHẬP</button>

        <p className="redirect-text">
          Bạn chưa có tài khoản?{' '}
          <span onClick={handleRegisterRedirect}>Đăng nhập tại đây</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
