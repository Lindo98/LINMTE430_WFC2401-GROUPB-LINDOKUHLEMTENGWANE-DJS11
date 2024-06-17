import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo">
          My App
        </Link>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              <i className="fas fa-info-circle"></i>
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">
              <i className="fas fa-box"></i>
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-bottom">
        <div className="recently-uploaded">
          <h3>Recently Uploaded</h3>
          {/* Add your Recently Uploaded component here */}
        </div>
        <div className="music-player">
          <h3>Music Player</h3>
          {/* Add your Music Player component here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
