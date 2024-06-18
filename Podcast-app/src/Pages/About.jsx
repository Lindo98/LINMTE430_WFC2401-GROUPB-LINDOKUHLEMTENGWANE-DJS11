import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function episodes() {
  const [episodes, setPreviews] = useState([]);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPreviews(data);
      });
  }, []);

  return (
    <div>
      <h1>Episodes</h1>

      {episodes.map((episode) => (
        <div key={episode.id}>{episode.title}</div>
      ))}
    </div>
  );
}

export default episodes;
