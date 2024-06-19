import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Seasons = () => {
  const { id } = useParams({});
  const [seasons, setSeasons] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPreviews(data);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching the seasons: {error.message}</div>;
  }

  return (
    <div>
      <h1>{seasons?.title}</h1>
      {/* Render additional episodes details here */}
    </div>
  );
};

export default Seasons;
