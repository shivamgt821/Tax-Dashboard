import React from "react";
import "./Sidebar.css";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Services", path: "/services" },
  { name: "Vat", path: "/epayTaxForm" },
  { name: "Corporate Tax", path: "/eVerifyReturn-bl" },
  { name: "Balance Sheet", path: "/balanceSheet" },
  { name: "Profit & Loss", path: "/profit&Loss" },
  { name: "CMA-Data", path: "/cmaData" },
  { name: "Case-Laws", path: "/case-Laws" },
  { name: "Article", path: "/article" },
  { name: "Session & Notification", path: "/session&Notification" },
  { name: "Appeals", path: "/appeals" },
  { name: "Forms", path: "/forms" },
  { name: "Rates Slab", path: "/ratesSlab" },
  { name: "Jurisdiction Notices", path: "/jurisdictionNotices" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Quick Links</h3>
      <div className="sidebar-items">
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.path} className="menu-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
