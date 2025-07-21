import React, { useState } from 'react';
import './CourseAccordion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye, faCheckCircle, faChevronDown, faChevronUp, faPlay } from '@fortawesome/free-solid-svg-icons';

const courses = [
  {
    title: "Professional graphic design tutorial full course with exercise file",
    subtitle: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    features: [
       "How to reduce file pixel dimentions without loosing quality",
      "Create vector file from restartize layer styles",
    ],
    expanded: true
  },
  {
    title: "Become ultimate photoshop expert within 30 days",
    subtitle: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    features: [
      "How to reduce file pixel dimentions without loosing quality",
      "Create vector file from restartize layer styles",
      "How to make logo pixel perfects with different extension",
      "Make color gradient with photoshop build-in tools"
    ],
    expanded: false
  },
  {
    title: "After effects animation tutorial with photoshop documents",
    subtitle: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    features: [
       "How to reduce file pixel dimentions without loosing quality",
      "Create vector file from restartize layer styles",
    ],
    expanded: false
  },
  {
    title: "Adobe illustrator vector art design mockup",
    subtitle: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    features: [
       "How to reduce file pixel dimentions without loosing quality",
      "Create vector file from restartize layer styles",
    ],
    expanded: false
  }
];

const CourseAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="course-section">
      <p className="section-subtitle">QUALITY FEATURES</p>
      <h2 className="section-title">Popular Designing Course</h2>

      {courses.map((course, index) => (
        <div
          key={index}
          className={`course-card ${openIndex === index ? 'open' : ''}`}
        >
          <div className="course-header" onClick={() => toggleAccordion(index)}>
            <div className="course-icon">
              <FontAwesomeIcon icon={faPlay} className="play-button" />
            </div>

            <div className="course-info">
              <div className="rating-line">
                <FontAwesomeIcon icon={faStar} className="icon" /> 5.0 (392 reviews) &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEye} className="icon" /> 2,538 students watched
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-subtitle">{course.subtitle}</p>

              {openIndex === index && course.features.length > 0 && (
                <ul className="feature-list">
                  {course.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="course-meta">
              <span className="badge">7 Video Classes</span>
              <span className="badge">4 hrs</span>
              <span className="dropdown-icon">
                <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CourseAccordion;
