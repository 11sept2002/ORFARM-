import React, { useState, useEffect } from "react";
import "./Slider.css";

// Import images from the assets folder
import slide1Image from "../assets/images/img-lemon.png";
import slide2Image from "../assets/images/img-bread.png";
import slide3Image from "../assets/images/img-vegetable.png";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "The Best Health Fresh.",
      subtitle: "TOP SELLER IN THE WEEK",
      description:
        "Presentation matters. Our fresh Vietnamese vegetable rolls look good and taste even better.",
      image: slide1Image,
      titleStyle: {
        color: "#2d2a6e",
        fontSize: "60px",
        fontWeight: "san serif",
        whiteSpace: "pre-wrap",
        width: "600px",
      },
      subtitleStyle: { color: "darkorange", fontSize: "18px" },
      descriptionStyle: { color: "grey", fontSize: "18px", whiteSpace: "pre-wrap", width: "400px" },
    },
    {
      id: 2,
      title: "Fresh Bread Organic Crumble.",
      subtitle: "LIMITED OFFER",
      description:
        "Enjoy the sweetness of nature with 100% organic and fresh fruits from our farms.",
      image: slide2Image,
      titleStyle: {
        
        color: "#2d2a6e",
        fontSize: "50px",
        fontWeight: "bold",
        whiteSpace: "pre-wrap",
        width: "500px",
      },
      subtitleStyle: { color: "orange", fontSize: "18px" },
      descriptionStyle: { color: "black", fontSize: "20px" },
    },
    {
      id: 3,
      title: "Choose Your Healthy Life style.",
      subtitle: "LIMITED OFFER",
      description:
        "Enjoy the freshness of organic vegetables delivered directly from the farm.",
      image: slide3Image,
      titleStyle: {
        
        color: "green",
        fontSize: "50px",
        fontWeight: "bold",
        whiteSpace: "pre-wrap",
        width: "500px",
        
      },
      subtitleStyle: { color: "red", fontSize: "18px" },
      descriptionStyle: { color: "white", fontSize: "20px" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <div className="slider-text">
            <p className="highlight" style={slide.subtitleStyle}>
              {slide.subtitle}
            </p>
            <h1 style={slide.titleStyle}>{slide.title}</h1>
            <p style={slide.descriptionStyle}>{slide.description}</p>
            <button className="shop-btn">SHOP NOW</button>
          </div>
          <img src={slide.image} alt={slide.title} />
        </div>
      ))}
      <button className="slider-button prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default Slider;
