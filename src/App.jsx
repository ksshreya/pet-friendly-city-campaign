import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VolunteerForm from "./components/VolunteerForm";
import ImpactStories from "./components/ImpactStories";
import AdoptionCarousel from "./components/AdoptionCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <VolunteerForm />
      <ImpactStories />
      <AdoptionCarousel />
      <Footer />
    </div>
  );
}

export default App;
