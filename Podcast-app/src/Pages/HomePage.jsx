import React, { useState, useEffect } from "react";

function HomePage() {
  const [previews, setPreviews] = useState([]);
  const [filterOption, setFilterOption] = useState("none");

  useEffect(() => {
    fetch("https://podcast-api.netlify.app")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPreviews(data);
      });
  }, []);

  //sorting functions this is a utility function!import it!
  const sortPreviews = (previews) => {
    switch (filterOption) {
      case "titleAsc":
        return [...previews].sort((a, b) => a.title.localeCompare(b.title));
      case "titleDesc":
        return [...previews].sort((a, b) => b.title.localeCompare(a.title));
      case "dateAsc":
        return [...previews].sort(
          (a, b) => new Date(a.updated) - new Date(b.updated)
        );
      case "dateDesc":
        return [...previews].sort(
          (a, b) => new Date(b.updated) - new Date(a.updated)
        );
      default:
        return previews;
    }
  };

  // const truncateText = (text, wordLimit) => {
  //   if (!text) return "";
  //   const words = text.split(" ");
  //   return words.length > wordLimit
  //     ? words.slice(0, wordLimit).join(" ") + "..."
  //     : text;
  // };

  // grid layout for home page
  return (
    <main className="max-w-7xl mx-auto">
      {/* {
        <div className="flex justify-between items-center mb-4">
          <div>
            <label htmlFor="filterOption" className="mr-2 font-semibold">
              Sort By:
            </label>
            <select
              id="filterOption"
              className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="none">None</option>
              <option value="titleAsc">Title A-Z</option>
              <option value="titleDesc">Title Z-A</option>
              <option value="dateAsc">Oldest First</option>
              <option value="dateDesc">Newest First</option>
            </select>
          </div>
          <button className="info-btn">Favorites</button>
        </div>
      } */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 bg-white">
        {sortPreviews(previews).map((preview) => (
          <div key={preview.id} className="">
            <div className=" bg-green m-4 p-4 shadow-xl">
              <div className="image-container">
                <img
                  className="image"
                  src={preview.image}
                  alt={preview.title}
                />
                <div className="overlay">
                  <button className="play-button">
                    <i className="fas fa-play"></i>
                  </button>
                </div>
              </div>
              <h3 className="font-semibold mt-4 text-s">{preview.title}</h3>{" "}
              {/* <p className="">
                {" "}
                Description: {preview.description.substring(0, 10)}
              </p>
              <p className="">Genres: {preview.genres.join(", ")}</p>
              <p className="">Seasons: {preview.seasons}</p>{" "} */}
              <p className="update">
                Last Updated: {new Date(preview.updated).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;
