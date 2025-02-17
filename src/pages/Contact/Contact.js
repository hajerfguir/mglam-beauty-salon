import React from 'react';
import './Contact.css';

import locationIcon from "../../public/images/location-icon.png";
import emailIcon from "../../public/images/email-icon.png";
import phoneIcon from "../../public/images/phone-icon.png";

const Contact = () => {
    const reviews = [
        { id: 1, name: "Sarah L.", rating: 4.8, text: "Amazing service! My hair has never looked better." },
        { id: 2, name: "Emma R.", rating: 4.5, text: "Loved the spa treatment, very relaxing and professional." },
        { id: 3, name: "Sophia K.", rating: 5, text: "Great nail art! Staff was super friendly and talented." }
    ];

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-grid">
                <div className="contact-item">
                    <img src={locationIcon} alt="Location Icon" className="contact-icon" />
                    <h3>Address</h3>
                    <p>1920 Bank St #4, Ottawa, ON K1V 7Z8, Canada</p>
                </div>

                <div className="contact-item">
                    <img src={emailIcon} alt="Email Icon" className="contact-icon" />
                    <h3>Email</h3>
                    <p><a href="mailto:mglam@gmail.com" className="email-link">mglam@gmail.com</a></p>
                </div>
                <div className="contact-item">
                    <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
                    <h3>Phone</h3>
                    <p>+1 (438)-917-5787 <br />+1 (438)-353-9935</p>
                </div>
            </div>
            <div className="opening-hours">
                <h3>Opening Hours</h3>
                <p><strong>Weekdays:</strong> 08:30 - 17:30</p>
                <p><strong>Weekends and Holidays:</strong> 09:00 - 12:00</p>
            </div>

            <div className="reviews-section">
                <h2 className="reviews-title">What Our Clients Say:</h2>
                <div className="reviews-container">
                    {reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <h3>{review.name}</h3>
                            <p className="review-text">"{review.text}"</p>
                            <p className="review-rating">⭐ {review.rating} / 5</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Contact;