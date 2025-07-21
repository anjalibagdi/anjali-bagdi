import React from 'react';
import './PricingSection.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const PricingSection = () => {
  return (
    <div className="pricing-container">
      <p className="plan-label">Pricing Plan</p>
      <h1 className="title">Choose your pricing policy</h1>

      <div className="toggle-buttons">
        <button className="toggle-btn active">Monthly Plan</button>
        <button className="toggle-btn">Annual Plan</button>
      </div>

      <div className="plans">
        {/* Free Plan */}
        <div className="plan-box">
          <h3 className="plan-title">Free Plan</h3>
          <p className="plan-subtitle">For Small teams or office</p>

          <ul className="features">
            <li><FaCheckCircle className="icon" /> Ultimate access to all course, exercises and assessments</li>
            <li><FaCheckCircle className="icon" /> Free access for all kind of exercise corrections with downloads</li>
            <li><FaCheckCircle className="icon" /> Total assessment corrections with free download access system</li>
            <li className="disabled"><FaTimesCircle className="icon" /> Unlimited download of courses on the mobile app contents</li>
            <li className="disabled"><FaTimesCircle className="icon" /> Download and print courses and exercises in PDF</li>
          </ul>

          <button className="action-btn">Start free trail</button>
        </div>

        {/* Premium Plan */}
        <div className="plan-box premium">
          <div className="recommended">Recommended</div>
          <h3 className="plan-title">Premium</h3>
          <p className="plan-subtitle">For startup enterprise</p>
          <p className="price">Starting from <span>$49.99/mo</span></p>

          <ul className="features">
            <li><FaCheckCircle className="icon" /> Ultimate access to all course, exercises and assessments</li>
            <li><FaCheckCircle className="icon" /> Free access for all kind of exercise corrections with downloads</li>
            <li><FaCheckCircle className="icon" /> Total assessment corrections with free download access system</li>
            <li><FaCheckCircle className="icon" /> Unlimited download of courses on the mobile app contents</li>
            <li><FaCheckCircle className="icon" /> Download and print courses and exercises in PDF</li>
          </ul>

          <button className="action-btn">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
