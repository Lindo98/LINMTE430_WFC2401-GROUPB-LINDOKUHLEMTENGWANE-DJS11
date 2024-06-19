import React from "react";
import { Link } from "react-router-dom";

const SeasonsComponent = ({ seasons }) => {
  return (
    <div>
      {seasons.map((season) => {
        return (
          <Link key={season.title} to="home">
            {season.title}
          </Link>
        );
      })}
    </div>
  );
};

export default SeasonsComponent;
