import React from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <div>
      <h1>Favorites</h1>
      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Favorites;
