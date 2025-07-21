import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar, FaRegEye } from "react-icons/fa";
import "./FeatureTutorial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { fetchResponse } from "../Service/fetchResponse";

import thumb1 from "../assets/images.png";
import thumb2 from "../assets/imagess.png";
import thumb3 from "../assets/image.png";

const fallbackImages = [thumb1, thumb2, thumb3];

export default function FeatureTutorial() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTutorials() {
      try {
        const response = await fetchResponse();
        setTutorials(response);
      } catch (err) {
        console.error("Error loading tutorials", err);
      } finally {
        setLoading(false);
      }
    }
    loadTutorials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="feature-tutorial-section">
      <div className="left-slider-box">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Slider {...settings}>
            {tutorials.map((tutorial, index) => (
              <div key={index} className="tutorial-slide-card">
                <img
                  src={fallbackImages[index % fallbackImages.length]}
                  alt="tutorial"
                  className="tutorial-img"
                />
                <div className="tutorial-content">
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={14}
                        color={i < Math.floor(tutorial.stars) ? "#f6b54c" : "#ddd"}
                      />
                    ))}
                    <span className="review-count">
                      {tutorial.stars} ({tutorial.review} reviews)
                    </span>
                  </div>
                  <h3 className="tutorial-title">{tutorial.title}</h3>
                  <p className="watched">
                    <FaRegEye size={14} /> {tutorial.studentsWatched} students watched
                  </p>
                  <span className="free-badge">Free tutorial</span>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      <div className="right-fixed-text">
        <p className="label">FREE TUTORIAL</p>
        <h2>More than thousand of free tutorial upload every weeks</h2>
        <p>
          Get your tests delivered at let home collect sample from the victory
          of the managements that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </p>
        <button className="explore-btn">Explore details</button>
      </div>
    </section>
  );
}
