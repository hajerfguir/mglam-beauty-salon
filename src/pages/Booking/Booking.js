import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Save form data in localStorage
        localStorage.setItem("bookingData", JSON.stringify(formData));

        // Navigate to confirmation page
        navigate("/confirmation");
    };

    return (
        <div className="booking-container">
            <div className="booking-box">
                {/* Left Side: Image */}
                <div className="booking-image">
                    <img src="/images/makeup.png" alt="Beauty Salon" />
                </div>

                {/* Right Side: Form */}
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
        </div>
    );
};

export default Booking;
