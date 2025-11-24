import React from "react";
import "./AboutPage.css";

import Tiffany from '../../assets/Tiffany.png'

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-image">
          <img src={Tiffany} alt="Tiffany" />
        </div>
        <div className="about-content">
          <h1>About Tiffany</h1>
          <p>
            I specialize in connecting businesses with verified leads across finance, insurance, legal, real estate, and technology sectors. My mission is to simplify client acquisition and help companies grow efficiently by providing accurate, actionable data.
          </p>
          <p>
            LeadLink Africa focuses on delivering high-quality, verified leads tailored to each industry, helping businesses save time and maximize conversions. All practices comply with POPIA regulations, ensuring data integrity and client trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
