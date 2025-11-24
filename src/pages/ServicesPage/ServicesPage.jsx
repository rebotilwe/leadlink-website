import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesPage.css";

const services = [
  {
    title: "Lead Generation for Businesses & Call Centres",
    description: "Verified, high-quality leads tailored to your industry, ensuring your sales team spends time on prospects most likely to convert."
  },
  {
    title: "Verified Data Lists & Client Acquisition Support",
    description: "Accurate and up-to-date contact lists, helping you reach the right clients quickly and efficiently."
  },
  {
    title: "Campaign Planning & Management",
    description: "From strategy to execution, targeted campaigns that connect you with ideal clients, track results, and optimize for maximum ROI."
  }
];

const ServicesPage = () => {
   const navigate = useNavigate();
  return (
    <section className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          LeadLink Africa is a lead generation and consulting company connecting verified leads with clients across finance, insurance, legal, real estate, and technology. We source data from trusted providers, maintain internal databases, and comply fully with POPIA regulations.
        </p>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="cta-container">
        <button className="cta-button" onClick={() => navigate("/contact")}>
          Get Verified Leads
        </button>
      </div>
    </section>
  );
};

export default ServicesPage;
