import React from "react";
import "./About.css";
import logo from "../../assets/logo.png";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={logo} alt="LeadLink Africa Logo" />
        </div>

        <div className="about-content">
          <h2>About LeadLink Africa</h2>
          <h3 className="tagline">Empowering Business Through Connection</h3>
          <p>
            LeadLink Africa is a lead generation and consulting company
            connecting businesses with verified, high-quality leads across
            finance, insurance, legal, real estate, and technology sectors.
          </p>
          <p>
            Our mission is to simplify client acquisition with accurate,
            actionable data while ensuring full compliance with POPIA
            regulations. We help businesses grow efficiently by focusing on
            reliable data, strategic targeting, and measurable results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
