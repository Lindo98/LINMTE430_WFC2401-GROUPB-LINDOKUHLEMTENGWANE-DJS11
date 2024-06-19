import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Episodes = () => {
  const params = useParams();
  const [episodes, setEpisodes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://podcast-api.netlify.app/id/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setEpisodes(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching the episodes:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching the episodes: {error.message}</div>;
  }

  return (
    <div>
      <h1>{episodes?.title}</h1>
      {/* Render additional episodes details here */}
    </div>
  );
};

export default Episodes;
