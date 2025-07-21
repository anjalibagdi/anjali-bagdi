import React from "react";
import { FaStar, FaRegStar, FaSearch, FaPaypal, FaDropbox } from "react-icons/fa";
import "./HeroSection.css";
import girlImage from "../assets/girl.jpg";
import video1 from "../assets/5390861-uhd_4096_2160_30fps.mp4"

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="rating">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} color="#0f2137" />
          ))}
          <FaRegStar color="#0f2137" />
          <span>Trusted by over 4,332 students</span>
        </p>

        <h1 >
          Learn Design <br />
          <span>with Nia Matos</span>
        </h1>

        <p className="desc">
          Get your blood tests delivered at let home collect sample from the victory of the
          managments that supplies best design system guidelines ever.
        </p>

        <div className="search-bar">
          <input type="text" placeholder="Search Course Name" />
          <button><FaSearch /></button>
        </div>

        <p className="sponsors">
          Sponsored by:
          <span><FaPaypal /> Paypal</span>
          <span>Google</span>
          <span><FaDropbox /> Dropbox</span>
        </p>
      </div>

      <div className="hero-right">
        {/* <img src={girlImage} alt="Girl with laptop" className="hero-img" /> */}
        <video src={video1} width="600" height="500" controls="controls" autoplay="true" />
        {/* <div className="play-button">&#9658;</div> */}
      </div>
    </section>
  );
}
