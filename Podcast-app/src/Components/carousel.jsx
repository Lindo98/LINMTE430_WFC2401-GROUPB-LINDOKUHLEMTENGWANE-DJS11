import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((res) => res.json())
      .then((data) => {
        if (data.shows) {
          const imageUrls = data.shows.map((show) => show.image);
          setImages(imageUrls);
        }
      })
      .catch((error) => {
        console.error("Error fetching the images:", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change to a more appropriate interval time, e.g., 3000ms

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto mt-4 flex items-center relative">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-md"
        onClick={goToPrevious}
      >
        Prev
      </button>
      <div className="carousel-inner relative w-full h-64 overflow-hidden">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`carousel-item absolute w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={imageUrl}
              alt={`Image ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-md"
        onClick={goToNext}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
