import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const serviceList = [
    {
      title: "Lead Generation for Businesses & Call Centres",
      description:
        "Verified, high-quality leads tailored to your industry, ensuring your sales team focuses on prospects most likely to convert."
    },
    {
      title: "Verified Data Lists & Client Acquisition Support",
      description:
        "Accurate and up-to-date contact lists to help you reach the right clients quickly and efficiently."
    },
    {
      title: "Campaign Planning & Management",
      description:
        "Strategic campaigns that connect you with ideal clients and optimise performance for maximum ROI."
    }
  ];

  return (
    <section className="services">
      <div className="services-wrapper">
        <h2>Our Services</h2>

        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/services" className="view-more-btn">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
