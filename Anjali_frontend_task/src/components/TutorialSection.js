import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar, FaRegEye } from "react-icons/fa";
import "./TutorialsSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { fetchResponse } from "../Service/fetchResponse";

// Local fallback images
import thumb1 from "../assets/images.png";
import thumb2 from "../assets/imagess.png";
import thumb3 from "../assets/image.png";

const fallbackImages = [thumb1, thumb2, thumb3];

export default function TutorialsSection() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  const reviewSection = async () => {
    try {
      const response = await fetchResponse();
      console.log("Fetched tutorials:", response);
      setTutorials(response);
    } catch (error) {
      console.error("Failed to fetch tutorials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    reviewSection();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="tutorials-section">
      <div className="tutorials-header">
        <p className="section-label">QUALITY FEATURES</p>
        <h2 className="section-title">Tutorials that people love most</h2>
      </div>

      {loading ? (
        <p>Loading tutorials...</p>
      ) : (
        <Slider {...settings} className="tutorials-slider">
          {tutorials.map((tutorial, index) => (
            <div className="tutorial-card" key={tutorial.id || index}>
              <div className="thumbnail">
                <img
                  src={ fallbackImages[index % fallbackImages.length]}
                  alt="tutorial"
                />
                <div className="play-btn">&#9658;</div>
              </div>
              <div className="card-body">
                <div className="rating-row">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < Math.floor(tutorial.stars) ? "#f6b54c" : "#ddd"}
                      size={14}
                    />
                  ))}
                  <span className="rating-text">
                    {tutorial.stars} ({tutorial.review} reviews)
                  </span>
                </div>
                <h3 className="tutorial-title">{tutorial.title}</h3>
                <p className="view-count">
                  <FaRegEye size={14} /> {tutorial.studentsWatched} students watched
                </p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}
