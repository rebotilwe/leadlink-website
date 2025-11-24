import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>LeadLink Africa</h3>
          <p>
            We connect businesses with verified, high-quality leads that drive
            growth, improve conversion rates, and strengthen client acquisition strategies.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Info</h4>
          <p>Email: leadlinkafrica@mail.com</p>
          <p>Phone: 067 080 5734</p>
          <p>South Africa</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 LeadLink Africa. All Rights Reserved.</p>
        <p className="developer">
          Developed by{" "}
          <a
            href="https://afribizconnect.co.za/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Afribiz Connect
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
