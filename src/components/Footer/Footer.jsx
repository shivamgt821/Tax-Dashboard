import React from 'react';
import './Footer.css';
import { FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">About the Portal</a></li>
            <li><a href="#">History of Direct Taxation</a></li>
            <li><a href="#">Vision, Mission, Values</a></li>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">Right to Information</a></li>
            <li><a href="#">Organizations & Functions</a></li>
            <li><a href="#">Media Reports</a></li>
            <li><a href="#">e-Filing Calendar 2021</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="#">Helpdesk Numbers</a></li>
            <li><a href="#">Grievances</a></li>
            <li><a href="#">View Grievance</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Using the Portal</h3>
          <ul>
            <li><a href="#">Website Policies</a></li>
            <li><a href="#">Accessibility Statement</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Browser Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Related Sites</h3>
          <ul>
            <li><a href="#">Income Tax India</a></li>
            <li><a href="#">NSDL</a></li>
            <li><a href="#">TRACES</a></li>
          </ul>
        </div>
      </div>

      <div className="social-media">
        <p>Follow us on</p>
        <div className="social-icons">
          <a href="#" className="social-icon"><FaYoutube /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaFacebook /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>This site is best viewed in 1024 * 768 resolution with latest version of Chrome, Firefox, Safari and Internet Explorer.</p>
        <p>Copyright © Income Tax Department, Ministry of Finance, Government of India. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;