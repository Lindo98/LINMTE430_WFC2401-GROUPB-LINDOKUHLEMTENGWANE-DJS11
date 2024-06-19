import React, { useState } from "react";
import PropTypes from "prop-types";

const EpisodesComponent = ({ episodes }) => {
  const [currentEpisode, setCurrentEpisode] = useState(null);

  const handlePlay = (episode) => {
    setCurrentEpisode(episode);
    const audio = new Audio(episode.audioUrl);
    audio.play();
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
              <h3 className=" p-4">{episode.title}</h3>
              <p className=" p-4">{episode.description}</p>
              <button
                className="text-white px-2 py-1 ml-4 text-m border rounded-md mt-2 space-x-2 space-y-2"
                style={{ backgroundColor: "#c5d86d" }}
                onClick={() => handlePlay(episode)}
              >
                Play
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="music-player max-w-7xl mx-auto">
        <h3 className="text-m font-semibold mb-2">
          Currently playing:{" "}
          {currentEpisode ? currentEpisode.title : "Select an episode"}
        </h3>
        <audio controls>
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
