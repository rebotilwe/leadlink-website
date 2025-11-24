import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Connecting Businesses With Verified Leads</h1>
        <p>
          LeadLink Africa helps companies in finance, legal, insurance, real
          estate, and technology grow through accurate, actionable data.
        </p>
        <button className="cta-button" onClick={() => navigate("/contact")}>
          Get Verified Leads
        </button>
      </div>
    </section>
  );
};
export default Hero;
