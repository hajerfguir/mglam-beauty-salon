import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("loggedIn");

    // Function to smooth scroll to a section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        navigate("/login");
    };

    return (
        <nav className="navbar">
            {/* Logo on the left */}
            <div className="logo-container">
                <img src="/images/mglam-logo.png" alt="MGlam Logo" className="navbar-logo" />
            </div>

            {/* Centered Navigation Links with Glam Icon in the middle */}
            <ul className="nav-links">
                <li className={location.pathname === "/" ? "active" : ""}><a href="#home">Home</a></li>
                <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
                <li className={location.pathname === "/team" ? "active" : ""}><Link to="/team">Our Team</Link></li>

                {/* Glam Icon in the center */}
                <li className="nav-icon">
                    <img src="/images/glam-icon.png" alt="Glam Icon" className="glam-icon" />
                </li>

                <li className={location.pathname === "/location" ? "active" : ""}><Link to="/location">Location</Link></li>
                <li className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact Us</Link></li>
                <li className={location.pathname === "/booking" ? "active" : ""}><Link to="/booking">Book Now</Link></li>
            </ul>

            {/* User Profile (Name + Icon) */}
            <div className="user-profile">
                {isLoggedIn ? (
                    <div className="user-info">
                        <Link to="/client-info" className="user-name">Hajer</Link> {/* Redirects to profile page */}
                        <img src="/images/login-icon.png" alt="User Icon" className="user-icon" />
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className="login-container">
                        <Link to="/login" className="login-link">Login</Link>
                        <img src="/images/login-icon.png" alt="Login Icon" className="login-icon" />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
