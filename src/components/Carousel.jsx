import { useState, useEffect } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              {image.url ? (
                // Si tiene URL, mostrar imagen real
                <>
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="carousel-image"
                  />
                  <div className="carousel-caption">{image.alt}</div>
                </>
              ) : (
                // Si no tiene URL, mostrar emoji (fallback)
                <div
                  style={{
                    background: image.gradient,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>
                      {image.icon}
                    </div>
                    <div style={{ fontSize: "1.5rem", fontWeight: "300" }}>
                      {image.text}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="carousel-button prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          ›
        </button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
