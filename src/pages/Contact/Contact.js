import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            {/* Title */}
            <h1 className="contact-title">Contact Us</h1>

            {/* Contact Sections */}
            <div className="contact-grid">
                {/* Address Section */}
                <div className="contact-item">
                    <img src="/images/location-icon.png" alt="Location Icon" className="contact-icon" />
                    <h3>Address</h3>
                    <p>1920 Bank St #4, Ottawa, ON K1V 7Z8, Canada</p>
                </div>

                {/* Email Section */}
                <div className="contact-item">
                    <img src="/images/email-icon.png" alt="Email Icon" className="contact-icon" />
                    <h3>Email</h3>
                    <p><a href="mailto:mglam@gmail.com" className="email-link">mglam@gmail.com</a></p>
                </div>

                {/* Phone Section */}
                <div className="contact-item">
                    <img src="/images/phone-icon.png" alt="Phone Icon" className="contact-icon" />
                    <h3>Phone</h3>
                    <p>(438) 917-5787 <br /> (438) 353-9935</p>
                </div>
            </div>

            {/* Opening Hours Section */}
            <div className="opening-hours">
                <h3>Opening Hours</h3>
                <p><strong>Weekdays:</strong> 08:30 - 17:30</p>
                <p><strong>Weekends and Holidays:</strong> 09:00 - 12:00</p>
            </div>
        </div>
    );
};

export default Contact;
