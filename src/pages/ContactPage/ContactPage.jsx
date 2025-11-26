import React, { useState } from "react";
import "./ContactPage.css";
import logo from "../../assets/logo.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/manzdbzn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="contact-page">
      <h2>Contact Our Lead Specialist</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Your Company / Organization"
            value={formData.company}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Work Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell our Lead Specialist about your lead requirements..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Get Verified Leads</button>

          {status && <p className="form-status">{status}</p>}
        </form>

        <div className="contact-info">
          <img src={logo} alt="LeadLink Africa Logo" />
          <p><strong>Phone:</strong> 067 080 5734</p>
          <p><strong>Email:</strong> Leadlinkafrica@gmail.com</p>
          <p>
            LeadLink Africa provides verified leads to help your business grow efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
