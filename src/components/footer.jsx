import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2 className="footer-subtitle">SUGERENCIAS</h2>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Full name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <br />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        cols="30"
        rows="10"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <input type="submit" className="submit-email" value="Send Message" />
    </form>
  );
}

export default Footer;
