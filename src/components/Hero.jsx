import React from "react";

const Hero = () => (
  <section className="hero" style={{ backgroundImage: "url('/images/paws.jpeg')" }}>
    <div className="hero-content">
      <h1>
        Welcome to <span className="paw-some">Pet-Friendly City Campaign</span>
      </h1>
      <p>Helping pets find loving homes and creating a safe city for our furry friends.</p>
      <div className="cta-buttons">
        <a href="#volunteer-section" className="primary">Volunteer</a>
        <a href="#adoption-carousel-section" className="secondary">Adopt</a>
        <a href="#impact-stories-section" className="tertiary">Stories</a>
      </div>
    </div>
  </section>
);

export default Hero;
