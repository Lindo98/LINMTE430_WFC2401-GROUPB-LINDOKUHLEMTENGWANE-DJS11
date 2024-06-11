import React, { useState, useEffect } from "react";

function Preview() {
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

  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  // grid layout for home page
  return (
    <main className="max-w-7xl mx-auto">
      {/* <div className="flex justify-between items-center mb-4">
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
        <button className="info-btn">
          Favorites
        </button>
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {sortPreviews(previews).map((preview) => (
          <div key={preview.id} className="">
            <div className="">
              <img className="" src={preview.image} alt={preview.title} />
              <h3 className="font-semibold mt-4 text-xl">
                {preview.title}
              </h3>{" "}
              <p className="">
                {" "}
                Description: {truncateText(preview.description, 15)}
              </p>
              {/* <p className="">Genres: {preview.genres.join(", ")}</p>
              <p className="">Seasons: {preview.seasons}</p>{" "}
              <p className="update">
                Last Updated: {new Date(preview.updated).toLocaleDateString()}
              </p> */}
              <button className="font-semibold bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                Listen now
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Preview;
