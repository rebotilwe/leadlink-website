import React from "react";
import "./AboutPage.css";
import { FaCheckCircle, FaUserShield, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="about-container modern-layout">
        
        {/* Left Visual Brand Block */}
        <div className="about-visual">
          <h2>LeadLink Africa</h2>
          <p>Your trusted partner in verified business leads</p>

          <div className="about-features">
            <div className="feature-box">
              <FaCheckCircle />
              <span>Verified Data</span>
            </div>
            <div className="feature-box">
              <FaUserShield />
              <span>POPIA Compliant</span>
            </div>
            <div className="feature-box">
              <FaChartLine />
              <span>High Conversion</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="about-content">
          <h1>About LeadLink Africa</h1>
          <p>
            We specialize in connecting businesses with verified leads across finance, insurance, legal, real estate, and technology sectors. Our mission is to simplify client acquisition and help companies grow efficiently through accurate, actionable data.
          </p>
          <p>
            LeadLink Africa delivers industry-specific leads that save time, improve performance, and increase revenue potential. All processes are POPIA compliant, ensuring trust, security, and data integrity for every client we serve.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
