import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form is not connected to anything yet
    alert('Form not connected to anything yet, email me directly at Uditchouhan30102004@gmail.com');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: 'Email',
      value: 'Uditchouhan30102004@gmail.com',
      link: 'mailto:Uditchouhan30102004@gmail.com'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      label: 'Phone',
      value: '6265119262',
      link: 'tel:6265119262'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      label: 'Location',
      value: 'India',
      link: null
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title gradient-text">Get In Touch</h2>
        
        <p className="contact-subtitle">
          Want to work together or just say hi? Send me a message.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card card">
              <h3>Let's Connect</h3>
              <p>
                I'm currently pursuing my Bachelor's in Computer Applications and looking for 
                internship opportunities. Feel free to reach out!
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-detail-item">
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-detail-content">
                      <span className="contact-label">{info.label}</span>
                      {info.link ? (
                        <a href={info.link} className="contact-value">
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 Udit Chouhan. All rights reserved.</p>
            <p className="footer-tagline">Built with React + Vite</p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
