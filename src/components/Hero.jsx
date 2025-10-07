import React from "react";
import heroImage from "../assets/images/hero.jpeg";

const Hero = () => {
  return (
    <header className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>
          Making Cities <span className="paw-some">Paw-some!</span> 🐾✨
        </h1>
        <p>Join the movement to create happier, healthier communities for everyone, including our furry friends!</p>
        <div className="cta-buttons">
          <a href="#volunteer-section" className="button primary">Join the Movement</a>
          <a href="#volunteer-section" className="button secondary">Volunteer Now</a>
          <a href="#" className="button tertiary">Learn More</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
