import React from "react";

const Header = () => {
  return (
    <header
      className="max-w-7xl mx-auto mt-4 mb-10 flex pt-8 pb-8"
      style={{ backgroundColor: "#f7f7f2" }}
    >
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
    </header>
  );
};

export default Header;
