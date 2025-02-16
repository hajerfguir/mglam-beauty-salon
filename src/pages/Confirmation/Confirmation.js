import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Confirmation.css";

const Confirmation = () => {
    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem("bookingData");

        if (storedData) {
            setBookingData(JSON.parse(storedData));
        } else {
            navigate("/booking");
        }
    }, [navigate]);

  
    const handleReturnHome = () => {
        navigate("/home"); // Navigate to home
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" }); 
        }, 100);
    };

    return (
        <div className="confirmation-container">
            <div className="confirmation-box">
                <div className="confirmation-icon">✔</div>
                {bookingData && (
                    <div className="confirmation-text">
                        <h3 className="confirmed-name">{bookingData.firstName} {bookingData.lastName}</h3>
                        <p>
                            Thank you for choosing M.Glam Beauty Center! Your reservation for {bookingData.service} has been successfully confirmed for {bookingData.date} at {bookingData.time}.  
                            We look forward to providing you with an exceptional beauty experience!  
                        </p>
                        <button className="return-button" onClick={handleReturnHome}>Return to Home</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Confirmation;
