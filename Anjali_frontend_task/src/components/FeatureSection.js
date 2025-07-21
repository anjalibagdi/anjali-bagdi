import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="feature-section">
        <div className="features-container">
          <div className="features-grid">
            <div className="feature-box orange" style={{ marginTop: '50px' }}>
              <h2>80K+</h2>
              <p>We have more than students</p>
            </div>
            <div className="feature-box red" style={{ marginBottom: '50px' }}>
              <h2>150+</h2>
              <p>Free online tutorials videos available</p>
            </div>
            <div className="feature-box pink" style={{ marginTop: '50px' }}>
              <h2>90+</h2>
              <p>Daily updated blog post maintain</p>
            </div>
            <div className="feature-box violet" style={{marginBottom: '50px' }}>
              <h2>& 3M</h2>
              <p>Job posted everydays with qualification</p>
            </div>
          </div>
        </div>

        <div className="feature-text">
          <p className="subheading">CORE FEATURES</p>
          <h1>
            Smart Jackpots<br />
            that you may love this<br />
            anytime & anywhere
          </h1>
          <p className="description">
            Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.
          </p>
          <button className="explore-btn" onClick={handleScroll}>Explore details</button>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
