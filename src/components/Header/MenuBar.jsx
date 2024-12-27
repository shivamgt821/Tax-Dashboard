import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <nav className="navigation-bar">
      <ul>
        <li><a href="/" className="active">Home</a></li>
        <li className="dropdown">
          <a href="#">Individual/HUF</a>
          <div className="dropdown-content">
            <a href="#">File Income Tax Return</a>
            <a href="#">View Form 26AS</a>
            <a href="#">View Tax Credit</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#">Company</a>
          <div className="dropdown-content">
            <a href="#">File Company Return</a>
            <a href="#">Company Registration</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#">Non-Company</a>
          <div className="dropdown-content">
            <a href="#">Partnership Firm</a>
            <a href="#">Trust Registration</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#">Tax Professionals & Others</a>
          <div className="dropdown-content">
            <a href="#">Tax Professional Portal</a>
            <a href="#">Resources</a>
          </div>
        </li>
        <li><a href="#">Downloads</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </nav>
  );
};

export default MenuBar;