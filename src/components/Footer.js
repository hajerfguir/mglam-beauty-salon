import React from "react";
import "./Footer.css";

import logo from "../public/images/logo-transparent.png";
import fbIcon from "../public/images/fb.png";
import twitterIcon from "../public/images/x.png";
import instaIcon from "../public/images/insta.png";
import footerImg from "../public/images/footer.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={logo} alt="M.Glam Logo" className="footer-logo" />
                <h2 className="footer-title">M.Glam Beauty Salon</h2>
                <p className="footer-description">
                    Discover excellence and well-being at M.Glam Beauty Salon. Our beauty
                    experts offer quality services to enhance your appearance and boost your confidence.
                </p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src={fbIcon} alt="Facebook" className="social-icon" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={instaIcon} alt="Instagram" className="social-icon" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-left">
                    <p>© 2025 M.Glam. All Rights Reserved.</p>
                    <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms of Use</a>
                </div>
                <div className="footer-right">
                    <img src={footerImg} alt="Payment Methods" className="footer-payment" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
