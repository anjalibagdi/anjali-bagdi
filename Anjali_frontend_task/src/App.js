import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TutorialsSection from "./components/TutorialSection";
import FeatureSection from "./components/FeatureSection";
import CourseAccordion from "./components/CourseAccordion";
import FlowSteps from "./components/FlowSteps";
import PricingSection from "./components/PricingSection";
import FAQAccordion from "./components/FAQAccordion";
import Footer from "./components/Footer";
import FeatureTutorial from "./components/FeatureTutorial";

export default function App() {
  return (
    <div className="main-container">
      <Navbar/>
      <HeroSection/>
      <TutorialsSection/>
      <FeatureSection/>
      <CourseAccordion/>
      <FlowSteps/>
      <PricingSection/>
      <FeatureTutorial/>
      <FAQAccordion/>
      <Footer/>
    </div>
  );
}