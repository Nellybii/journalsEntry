import React from 'react';
import '../styles/footer.css'; // Ensure you have the appropriate styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <h3>Journal App</h3>
            <p>Your memories, organized and secured.</p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:support@journalapp.com">support@journalapp.com</a></p>
            <p>Phone: +254 456 7890</p>
            <p>Address: 00100 Journal St, Nairobi City, Kenya</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>© 2024 Journal App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
