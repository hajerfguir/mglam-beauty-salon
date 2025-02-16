import React from "react";
import Services from "../Services/Services";
import Booking from "../Booking/Booking";
import Location from "../Location/Location";
import Contact from "../Contact/Contact";
import Team from "../Team/Team";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1 className="salon-name">M. Glam Beauty Salon</h1>
        <div className="hero-section">
          <img
            src="/images/mglam-center.jpg"
            alt="Salon Interior"
            className="hero-image"
          />
        </div>
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="location">
        <Location />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="booking">
        <Booking />
      </div>
    </>
  );
};

export default Home;
