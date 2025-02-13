import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Logo */}
                <img src="/images/logo-transparent.png" alt="M.Glam Logo" className="footer-logo" />

                {/* Title */}
                <h2 className="footer-title">M.Glam Beauty Salon</h2>

                {/* Description */}
                <p className="footer-description">
                    Discover excellence and well-being at M.Glam Beauty Salon. Our beauty
                    experts offer quality services to enhance your appearance and boost your confidence.
                </p>

                {/* Social Icons */}
                <div className="social-icons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/fb.png" alt="Facebook" className="social-icon" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/x.png" alt="Twitter" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/insta.png" alt="Instagram" className="social-icon" />
                    </a>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                <div className="footer-left">
                    <p>© 2025 M.Glam. All Rights Reserved.</p>
                    <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms of Use</a>
                </div>
                <div className="footer-right">
                    <img src="/images/footer.png" alt="Payment Methods" className="footer-payment" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
