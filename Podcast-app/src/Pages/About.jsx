import React, { useState, useEffect } from "react";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEpisodes(data);
      });
  }, []);

  return (
    <div className="bg-green m-4 p-4 shadow-xl">
      {episodes.map((episode, index) => (
        <div key={index} className="image-container">
          <img className="image" src={episode.image} alt={episode.title} />

          <div className="overlay">
            <button className="play-button">
              <i className="fas fa-play"></i>
            </button>
          </div>
          <h3 className="font-semibold mt-4 text-s">{episode.title}</h3>
          <p className="">
            Description: {episode.description.substring(0, 10)}
          </p>
          <p className="">Genres: {episode.genres.join(", ")}</p>
          <p className="">Seasons: {episode.seasons}</p>
          <p className="update">
            Last Updated: {new Date(episode.updated).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Episodes;
