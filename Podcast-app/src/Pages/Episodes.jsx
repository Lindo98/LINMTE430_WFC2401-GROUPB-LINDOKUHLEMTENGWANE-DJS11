import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const EpisodesComponent = ({ episodes }) => {
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const audioRef = useRef(null);

  const handlePlay = (episode) => {
    setCurrentEpisode(episode);
    if (audioRef.current) {
      audioRef.current.src = episode.audioUrl;
      audioRef.current.play();
    }
  };

  const toggleFavorite = (episode) => {
    if (favorites.includes(episode)) {
      setFavorites(favorites.filter((fav) => fav !== episode));
    } else {
      setFavorites([...favorites, episode]);
    }
  };

  const EpisodeDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <p className="p-4">
        {isExpanded || description.length <= 30
          ? description
          : `${description.slice(0, 30)}... `}
        {description.length > 30 && (
          <button className="text-bold ml-6" onClick={toggleDescription}>
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>
    );
  };

  return (
    <div className="episodes mt-4">
      <h2 className="text-2xl font-bold mb-2 mt-10">Episodes</h2>
      <div className="max-w-7xl mx-auto" style={{ backgroundColor: "#f7f7f2" }}>
        <div className="episodes-grid p-10">
          {episodes.map((episode, index) => (
            <div
              key={index}
              className="episode-item m-4 p-4 shadow-2xl rounded-lg"
            >
              <h3 className="p-4">{episode.title}</h3>
              <EpisodeDescription description={episode.description} />

              <div className="flex items-center">
                <button
                  className="text-white px-10 py-1 ml-4 text-sm border rounded-md mt-2 space-x-2 space-y-2"
                  style={{ backgroundColor: "#c5d86d" }}
                  onClick={() => handlePlay(episode)}
                >
                  Play
                </button>
                <FaHeart
                  className={`ml-4 cursor-pointer ${
                    favorites.includes(episode)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => toggleFavorite(episode)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="music-player max-w-7xl mx-auto">
        <h3 className="text-m font-semibold mb-2">
          Currently playing:{" "}
          {currentEpisode ? currentEpisode.title : "Select an episode"}
        </h3>
        <audio ref={audioRef} controls>
          <source
            src={
              currentEpisode
                ? currentEpisode.audioUrl
                : "https://podcast-api.netlify.app/placeholder-audio.mp3"
            }
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="favorites-list">
        <h3 className="text-xl font-bold mb-2 mt-10">Favorites</h3>
        <ul>
          {favorites.map((favEpisode, index) => (
            <li
              key={index}
              className="favorite-item m-4 p-4 shadow-2xl rounded-lg"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3>{favEpisode.title}</h3>
                  <p>{favEpisode.description}</p>
                  <audio controls>
                    <source src={favEpisode.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => removeFromFavorites(favEpisode)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

EpisodesComponent.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      audioUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EpisodesComponent;
