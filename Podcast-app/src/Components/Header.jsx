import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ favorites }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setSearchResults([]); // Clear search results if search query is empty
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent form submission and page reload
    const filteredResults = favorites.filter((item) => {
      const itemName = item.name.toLowerCase();
      const query = searchQuery.toLowerCase();
      return itemName.includes(query);
    });

    setSearchResults(filteredResults);
  };

  const clearSearchResults = () => {
    setSearchResults([]);
    setSearchQuery("");
  };

  return (
    <header
      className="max-w-7xl mx-auto sm:m-4 mt-4 mb-10 justify-between flex items-center rounded-lg"
      style={{ backgroundColor: "#f7f7f2" }}
    >
      <div className="logo">
        <Link to=".">
          <img src="./src/images/logo.png" alt="logo" className="logo" />
        </Link>
      </div>
      <div>
        <Link to={{ pathname: "/favorites", state: { favorites } }}>
          <button
            className="favorites-btn px-2 py-1 text-m border rounded-md"
            style={{ backgroundColor: "#f7f7f2" }}
          >
            Favorites
          </button>
        </Link>
      </div>
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
        {searchResults.length > 0 && (
          <button className="clear-search-btn" onClick={clearSearchResults}>
            Clear Search
          </button>
        )}
      </form>
      {searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
