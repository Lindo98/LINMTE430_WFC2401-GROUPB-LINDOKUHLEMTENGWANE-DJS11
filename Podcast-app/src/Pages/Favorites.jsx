import React, { useState, useEffect } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="favorites-list">
      <h3 className="text-xl font-bold mb-2 mt-10">Favorites</h3>
      <ul>
        {favorites.map((favEpisode, index) => (
          <li key={index}>
            {favEpisode.title}
            <img
              src={favEpisode.image}
              alt={favEpisode.title}
              className="w-10 h-10 object-cover"
            />
            description: {favEpisode.description}
            <audio src="favEpisode.audioUrl"></audio>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
