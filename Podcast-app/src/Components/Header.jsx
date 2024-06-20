import React from "react";
import { Link } from "react-router-dom";

const Header = ({ favorites }) => {
  return (
    <header
      className="max-w-7xl mx-auto mt-4 mb-10 justify-between flex items-center rounded-lg"
      style={{ backgroundColor: "#f7f7f2" }}
    >
      <div className="logo">
        <Link to=".">
          <img src="./src/images/logo.png" alt="logo" className="logo" />
        </Link>
      </div>
      <div>
        <Link
          to={{
            pathname: "/favorites",
            state: { favorites },
          }}
        >
          <button
            className="favorites-btn px-2 py-1 text-m border rounded-md"
            style={{ backgroundColor: "#f7f7f2" }}
          >
            Favorites
          </button>
        </Link>
      </div>
      <div className="search-bar">
        <input className="search-input" type="text" placeholder="Search..." />
        <button className="search-btn" type="submit">
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
