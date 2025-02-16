import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("loggedIn");

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
        <>
            <div className="discount-banner">🔥 ONLY THIS MONTH: 20% DISCOUNT ON ALL SERVICES 🔥</div>
            <Navbar expand="lg" fixed="top" className="navbar custom-navbar">
                <Container>
                    <Navbar.Brand href="/" className="navbar-brand">
                        <Image src="/images/mglam-logo.png" alt="MGlam Logo" className="navbar-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto nav-links d-flex align-items-center justify-content-center">
                            <Nav.Link onClick={() => handleNavigation("home", "/")} className={location.pathname === "/" ? "active custom-active" : "custom-link"}>Home</Nav.Link>
                            <Nav.Link onClick={() => handleNavigation("services", "/services")} className={location.pathname === "/services" ? "active custom-active" : "custom-link"}>Services</Nav.Link>
                            <Nav.Link onClick={() => handleNavigation("team", "/team")} className={location.pathname === "/team" ? "active custom-active" : "custom-link"}>Our Team</Nav.Link>
                            <Nav.Link className="nav-icon">
                                <Image src="/images/glam-icon.png" alt="Glam Icon" className="glam-icon" />
                            </Nav.Link>
                            <Nav.Link onClick={() => handleNavigation("location", "/location")} className={location.pathname === "/location" ? "active custom-active" : "custom-link"}>Location</Nav.Link>
                            <Nav.Link onClick={() => handleNavigation("contact", "/contact")} className={location.pathname === "/contact" ? "active custom-active" : "custom-link"}>Contact Us</Nav.Link>
                            <Nav.Link onClick={() => handleNavigation("booking", "/booking")} className={location.pathname === "/booking" ? "active custom-active" : "custom-link"}>Book Now</Nav.Link>
                        </Nav>
                        <Nav className="user-profile d-flex align-items-center">
                            {isLoggedIn ? (
                                <div className="user-info d-flex align-items-center">
                                    <Link to="/client-info" className="user-name custom-user fw-bold">Hajer</Link>
                                    <Image src="/images/login-icon.png" alt="User Icon" className="user-icon" />
                                    <Button variant="danger" size="sm" onClick={handleLogout} className="logout-btn">Logout</Button>
                                </div>
                            ) : (
                                <div className="login-section d-flex align-items-center">
                                    <Link to="/login" className="login-text custom-link">Login</Link>
                                    <Image src="/images/login-icon.png" alt="Login Icon" className="login-icon" />
                                </div>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default CustomNavbar;
