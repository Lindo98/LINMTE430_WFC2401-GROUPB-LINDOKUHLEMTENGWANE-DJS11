import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app");
        const data = await response.json();
        console.log(data); // Add this line to debug the fetched data
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10);

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
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={image.source} alt={image.title} />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={goToPrevious}>
        <span className="carousel-control-icon">&lt;</span>
      </button>
      <button className="carousel-control next" onClick={goToNext}>
        <span className="carousel-control-icon">&gt;</span>
      </button>
    </div>
  );
};

export default Carousel;
