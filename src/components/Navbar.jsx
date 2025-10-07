import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">🐾 Pet-Friendly City</div>
      <ul>
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#about-us">About</a></li>
        <li><a href="#volunteer-section">Volunteer</a></li>
        <li><a href="#impact-stories-section">Impact Stories</a></li>
        <li><a href="#contact-us">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
