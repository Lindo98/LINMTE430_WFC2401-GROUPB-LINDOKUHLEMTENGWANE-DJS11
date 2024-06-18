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
          <h3 className="font-semibold mt-4 text-s">{episode.title}</h3>
          <p className="">Description: {episode.description}</p>
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
