import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Capital Fiber Solutions</h2>
        <p className="contact-subtitle">
          Get in touch with our team for inquiries, support, or partnership opportunities
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>General Inquiries/ Technical Support</h3>
              <p>Email: netsmartsolutions@gmail.com</p>
              <p>Phone: +254714001616/0112274074</p>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" required></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
