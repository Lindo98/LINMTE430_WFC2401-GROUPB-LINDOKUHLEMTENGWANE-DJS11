import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [filterOption, setFilterOption] = useState("none");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic with searchTerm
    console.log("Search term:", searchTerm);
  };

  const sortPreviews = (previews) => {
    switch (filterOption) {
      case "titleAsc":
        return [...previews].sort((a, b) => a.title.localeCompare(b.title));
      case "titleDesc":
        return [...previews].sort((a, b) => b.title.localeCompare(a.title));
      case "dateAsc":
        return [...previews].sort(
          (a, b) => new Date(a.updated) - new Date(b.updated)
        );
      case "dateDesc":
        return [...previews].sort(
          (a, b) => new Date(b.updated) - new Date(a.updated)
        );
      default:
        return previews;
    }
  };

  return (
    <header className="header flex p-4">
      <nav className="nav">
        <div className="logo">
          <img src="/logo.png" alt="My App Logo" />
        </div>

        <div>
          <select
            id="filterOption"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="none">Filter</option>
            <option value="titleAsc">Display from A-Z</option>
            <option value="titleDesc">Display from Z-A</option>
            <option value="dateAsc">Oldest</option>
            <option value="dateDesc">Newest</option>
          </select>
        </div>

        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
