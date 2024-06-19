import React from "react";
import PropTypes from "prop-types";

const FavoritesComponent = ({ favorites }) => {
  return (
    <div className="favorites mt-4">
      <h2 className="text-lg font-semibold mb-2">Favorites</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            <span>{favorite.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

FavoritesComponent.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      audioUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FavoritesComponent;
