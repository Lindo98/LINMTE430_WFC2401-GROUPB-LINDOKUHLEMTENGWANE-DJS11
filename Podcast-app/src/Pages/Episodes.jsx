import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaHeart, FaTrash } from "react-icons/fa";

const Episodes = ({ episodes }) => {
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
    if (favorites.find((fav) => fav.title === episode.title)) {
      setFavorites(favorites.filter((fav) => fav.title !== episode.title));
    } else {
      setFavorites([...favorites, episode]);
    }
  };

  const removeFromFavorites = (episode) => {
    setFavorites(favorites.filter((fav) => fav.title !== episode.title));
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
            {isExpanded ? "Read less" : "Read more..."}
          </button>
        )}
      </p>
    );
  };

  return (
    <div className="episodes mt-4 ">
      <h2 className="text-2xl font-bold mb-2 mt-10">Episodes</h2>
      <div
        className="max-w-7xl mx-auto rounded-lg"
        style={{ backgroundColor: "#f7f7f2" }}
      >
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-2 rounded-lg">
          {episodes.map((episode, index) => (
            <div
              key={index}
              className="episode-item m-4 p-4 shadow-2xl rounded-lg"
            >
              <img src={episode.image} alt="" className="" />

              <h3 className="p-4">{episode.title}</h3>
              <EpisodeDescription description={episode.description} />

              <div className="flex items-center">
                <audio controls className="mt-4 ml-4 mb-4">
                  <source
                    src={
                      episode.audioUrl ||
                      "https://podcast-api.netlify.app/placeholder-audio.mp3"
                    }
                    type="audio/mpeg"
                    style={{ backgroundColor: "#c5d86d" }}
                  />
                  Your browser does not support the audio element.
                </audio>
                <FaHeart
                  className={`ml-8 mr-4 cursor-pointer ${
                    favorites.find((fav) => fav.title === episode.title)
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
    </div>
  );
};

Episodes.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      audioUrl: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Episodes;
