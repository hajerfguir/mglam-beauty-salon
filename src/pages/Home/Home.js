import React from 'react';
import './Home.css'; // Importing the CSS file

const Home = () => {
    return (
        <div className="home-container">
            {/* Salon Name Positioned Correctly */}
            <h1 className="salon-name">M. Glam Beauty Salon</h1>

            {/* Hero Section with Background Image */}
            <div className="hero-section">
                <img src="/images/mglam-center.jpg" alt="Salon Interior" className="hero-image" />
            </div>
        </div>
    );
};

export default Home;
