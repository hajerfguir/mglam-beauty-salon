import React, { useState } from "react"; 
import "./Booking.css";

import makeupImage from "../../public/images/makeup.png";

const Booking = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
    });

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("bookingData", JSON.stringify(formData));
        setShowConfirmation(true);
        setTimeout(() => {
            const confirmationSection = document.getElementById("confirmation-section");
            if (confirmationSection) {
                confirmationSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <div className="booking-container">
            <div className="booking-box">
                <div className="booking-image">
                    <img src={makeupImage} alt="Beauty Salon" />
                </div>

                <div className="booking-form">
                    <h3 className="salon-title">M.GLAM BEAUTY SALON</h3>
                    <h2 className="booking-title">Book appointment</h2>
                    <p className="booking-description">
                        Self-care is not a luxury, it's a necessity. Book your appointment now for a touch of elegance and expertise!
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="input-row">
                            <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required />
                            <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <div className="input-row">
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="input-row">
                            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                            <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                        </div>
                        <select name="service" value={formData.service} onChange={handleChange} required>
                            <option value="">Service</option>
                            <option value="Makeup">Makeup</option>
                            <option value="Hair Styling">Hair Styling</option>
                            <option value="Nail Care">Nail Care</option>
                            <option value="Spa">Spa Procedures</option>
                        </select>

                        <button type="submit" className="booking-button">Send message</button>
                    </form>
                </div>
            </div>

            {showConfirmation && (
                <div id="confirmation-section" className="confirmation-container">
                    <div className="confirmation-box">
                        <div className="confirmation-icon">✔</div>
                        <div className="confirmation-text">
                            <h3 className="confirmed-name">{formData.firstName} {formData.lastName}</h3>
                            <p>
                                Thank you for choosing M.Glam Beauty Center! Your reservation for {formData.service} has been successfully confirmed for {formData.date} at {formData.time}.  
                                We look forward to providing you with an exceptional beauty experience!  
                            </p>
                            <button className="return-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                Return to Top
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Booking;