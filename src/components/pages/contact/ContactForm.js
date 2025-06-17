import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Contact for Product'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Họ Và Tên"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <label className="subject-label">Yêu cầu</label>
      <select name="subject" value={form.subject} onChange={handleChange}>
        <option>Liên hệ cho sản phẩm</option>
        <option>Liên hệ cộng tác / Phương tiện truyền thông</option>
        <option>Tuyển dụng</option>
      </select>
      <button type="submit">GỬI TIN NHẮN</button>
    </form>
  );
};

export default ContactForm;
