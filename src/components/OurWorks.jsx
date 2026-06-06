import { useEffect, useState, useCallback } from "react";
import "../OurWorks.css";

import project1 from "../assets/hotel1.jpeg";
import project2 from "../assets/house1.jpeg";
import project3 from "../assets/interior1.jpeg";
import project4 from "../assets/interior2.jpeg";
import project5 from "../assets/st_scool.jpeg";

export default function OurWorks() {
  const projects = [
    { title: "The Florida Grand (Goa)", category: "Hospitality", image: project1 },
    { title: "Bunglow Gandhi Dham, Gujrat", category: "Residential", image: project2 },
    { title: "Premium Office Space", category: "Commercial", image: project3 },
    { title: "Luxury Living Room", category: "Interior", image: project4 },
    { title: "ST Francis School (Gaziabad,U.P.)", category: "Exterior", image: project5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const goTo = useCallback((index, dir = "next") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  const goNext = useCallback(() => {
    goTo(currentIndex === projects.length - 1 ? 0 : currentIndex + 1, "next");
  }, [currentIndex, goTo, projects.length]);

  const goPrev = useCallback(() => {
    goTo(currentIndex === 0 ? projects.length - 1 : currentIndex - 1, "prev");
  }, [currentIndex, goTo, projects.length]);

  useEffect(() => {
    const interval = setInterval(goNext, 4000);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <section className="ow-section" id="our-work">
      <div className="ow-container">

        {/* Header */}
        <div className="ow-header">
          <span className="ow-tag">OUR WORK</span>
          <h2 className="ow-title">
            Recent <span className="ow-accent">Projects</span>
          </h2>
          <p className="ow-subtitle">
            Transforming spaces with craftsmanship, color &amp; care.
          </p>
        </div>

        {/* Desktop / Tablet Slider */}
        <div className="ow-slider-wrapper">

          {/* Slide */}
          <div className={`ow-slide ow-slide--${direction} ${isAnimating ? "ow-slide--exit" : "ow-slide--enter"}`}>
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="ow-slide-img"
            />
            <div className="ow-slide-overlay">
              <span className="ow-slide-cat">{projects[currentIndex].category}</span>
              <h3 className="ow-slide-title">{projects[currentIndex].title}</h3>
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button className="ow-arrow ow-arrow--prev" onClick={goPrev} aria-label="Previous project">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="ow-arrow ow-arrow--next" onClick={goNext} aria-label="Next project">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Counter */}
          <div className="ow-counter">
            <span className="ow-counter-current">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="ow-counter-sep">/</span>
            <span className="ow-counter-total">{String(projects.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Dots */}
        <div className="ow-dots" role="tablist">
          {projects.map((p, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`View ${p.title}`}
              className={`ow-dot ${i === currentIndex ? "ow-dot--active" : ""}`}
              onClick={() => goTo(i, i > currentIndex ? "next" : "prev")}
            />
          ))}
        </div>

        {/* Mobile stacked cards */}
        <div className="ow-mobile-grid">
          {projects.map((p, i) => (
            <div key={i} className="ow-card">
              <img src={p.image} alt={p.title} className="ow-card-img" />
              <div className="ow-card-overlay">
                <span className="ow-card-cat">{p.category}</span>
                <h3 className="ow-card-title">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}