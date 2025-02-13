import React from 'react';
import './Location.css';

const Location = () => {
    return (
        <div className="location-container">
            {/* Title */}
            <h1 className="location-title">Our Location</h1>

            {/* Google Maps Embed */}
            <div className="map-container">
                <iframe
                    title="M.Glam Location"
                    className="map-frame"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11153.020789502788!2d-75.6632116!3d45.3659526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0778e2a45cb1%3A0x42210ad3347556a1!2s1920%20Bank%20St%20%234%2C%20Ottawa%2C%20ON%20K1V%207Z8%2C%20Canada!5e0!3m2!1sen!2sca!4v1707777777777!5m2!1sen!2sca"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Location;
