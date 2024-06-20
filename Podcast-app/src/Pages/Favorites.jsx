import React from "react";
import PropTypes from "prop-types";

const Favorites = ({ favorites }) => {
  if (!favorites || favorites.length === 0) {
    return <div>No favorites added yet.</div>;
  }

  return (
    <div className="favorites mt-4">
      <h2 className="text-2xl font-bold mb-2 mt-10">Favorites</h2>
      <div className="max-w-7xl mx-auto" style={{ backgroundColor: "#f7f7f2" }}>
        <div className="favorites-grid p-10">
          {favorites.map((episode, index) => (
            <div
              key={index}
              className="favorite-item m-4 p-4 shadow-2xl rounded-lg"
            >
              <h3 className=" p-4">{episode.title}</h3>
              <p className="p-4">{episode.description}</p>
              <audio controls>
                <source
                  src={
                    episode.audioUrl ||
                    "https://podcast-api.netlify.app/placeholder-audio.mp3"
                  }
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      audioUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Favorites;
