import React from "react";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Services from "../components/Services";
// import Testimonials from "../components/Testimonials";
// import ContactForm from "../components/ContactForm";

import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactForm from "../../components/ContactForm/ContactForm";


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
