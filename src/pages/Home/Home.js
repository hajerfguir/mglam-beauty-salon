import React from 'react';
import './Home.css'; 
const Home = () => {
    return (
        <div className="home-container">
            <h1 className="salon-name">M. Glam Beauty Salon</h1>
            <div className="hero-section">
                <img src="/images/mglam-center.jpg" alt="Salon Interior" className="hero-image" />
            </div>
        </div>
    );
};

export default Home;
