import React, { useState } from 'react';
import './Header.css';
import { FaPhone, FaGlobe, FaAdjust } from 'react-icons/fa';
import dummyLogo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [language, setLanguage] = useState('English');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const adjustFontSize = (adjustment) => {
    setFontSize(prevSize => Math.min(Math.max(prevSize + adjustment, 12), 20));
    document.documentElement.style.fontSize = `${fontSize}px`;
  };

  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="top-header">
        <div className="logo-container">
         
          <div className="logo-text">
            {/* <h1>e-Filing</h1> */}
            <img src={dummyLogo} alt="e-Filing Logo" className="logo" />
            <p>Income Tax Department, Government of India</p>
          </div>
        </div>
        
        <div className="header-controls">
          <div className="call-us">
            <FaPhone />
            <select>
              <option>Call Us</option>
              <option>1800-XXX-XXXX</option>
              <option>1800-XXX-YYYY</option>
            </select>
          </div>

          <div className="language-selector">
            <FaGlobe />
            <select onChange={(e) => setLanguage(e.target.value)}>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>

          <div className="accessibility-controls">
            <button onClick={() => adjustFontSize(-1)}>A-</button>
            <button onClick={() => adjustFontSize(0)}>A</button>
            <button onClick={() => adjustFontSize(1)}>A+</button>
          </div>

          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            <FaAdjust />
          </button>

          <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate('/login')}>Login</button>            
          <button className="register-btn" onClick={() => navigate('/register')}>Register</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;