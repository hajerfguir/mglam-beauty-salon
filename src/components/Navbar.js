import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("loggedIn");

    // Function to handle both scrolling & navigation
    const handleNavigation = (sectionId, route) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(route);
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
                <li className={location.pathname === "/home" ? "active" : ""}>
                    <button onClick={() => handleNavigation("home", "/")}>
                        Home
                    </button>
                </li>
                <li className={location.pathname === "/services" ? "active" : ""}>
                    <button onClick={() => handleNavigation("services", "/")}>
                        Services
                    </button>
                </li>
                <li className={location.pathname === "/team" ? "active" : ""}>
                    <button onClick={() => handleNavigation("team", "/")}>
                        Our Team
                    </button>
                </li>

                {/* Glam Icon in the center */}
                <li className="nav-icon">
                    <img src="/images/glam-icon.png" alt="Glam Icon" className="glam-icon" />
                </li>

                <li className={location.pathname === "/location" ? "active" : ""}>
                    <button onClick={() => handleNavigation("location", "/location")}>
                        Location
                    </button>
                </li>
                <li className={location.pathname === "/contact" ? "active" : ""}>
                    <button onClick={() => handleNavigation("contact", "/contact")}>
                        Contact Us
                    </button>
                </li>
                <li className={location.pathname === "/booking" ? "active" : ""}>
                    <button onClick={() => handleNavigation("booking", "/booking")}>
                        Book Now
                    </button>
                </li>
            </ul>

      
            <div className="user-profile">
                {isLoggedIn ? (
                    <div className="user-info">
                        <Link to="/client-info" className="user-name" onClick={() => navigate('/client-info')}>
                            Hajer
                        </Link>
                        <img src="/images/login-icon.png" alt="User Icon" className="user-icon" />
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className="login-section">
                        <Link to="/login" className="login-text">Login</Link>
                        <img src="/images/login-icon.png" alt="Login Icon" className="login-icon" />
                    </div>
                )}
              
            </div>
        </nav>
    );
};

export default Navbar;
