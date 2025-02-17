import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <h1 className="services-title">Our Services</h1>

            <div className="services-grid">
                <div>
                    <h2 className="services-category">Make Up</h2>
                    <div className="service-item"><span>Daily make up</span> <span className="service-price">from $35</span></div>
                    <div className="service-item"><span>Night make up</span> <span className="service-price">from $40</span></div>
                    <div className="service-item"><span>Bridal make up</span> <span className="service-price">from $50</span></div>
                    <div className="service-item"><span>Occasion make up</span> <span className="service-price">from $50</span></div>
                    <div className="service-item"><span>Television make up</span> <span className="service-price">from $70</span></div>
                </div>

                <div>
                    <h2 className="services-category">Nail Care</h2>
                    <div className="service-item"><span>Manicure</span> <span className="service-price">from $15</span></div>
                    <div className="service-item"><span>Pedicure</span> <span className="service-price">from $35</span></div>
                    <div className="service-item"><span>French manicure</span> <span className="service-price">from $20</span></div>
                    <div className="service-item"><span>Manicure & gel nails</span> <span className="service-price">from $40</span></div>
                    <div className="service-item"><span>Gel polish + reapplication</span> <span className="service-price">from $25</span></div>
                </div>

                <div>
                    <h2 className="services-category">Hair Styling</h2>
                    <div className="service-item"><span>Simple haircut</span> <span className="service-price">from $30</span></div>
                    <div className="service-item"><span>Hair Styling</span> <span className="service-price">from $25</span></div>
                    <div className="service-item"><span>Full hair color</span> <span className="service-price">from $99</span></div>
                    <div className="service-item"><span>Protein treatment</span> <span className="service-price">from $50</span></div>
                    <div className="service-item"><span>Hair mask</span> <span className="service-price">from $15</span></div>
                </div>

                <div>
                    <h2 className="services-category">SPA Procedures</h2>
                    <div className="service-item"><span>Body scrub & smoothing</span> <span className="service-price">from $50</span></div>
                    <div className="service-item"><span>Indulge & relax</span> <span className="service-price">from $60</span></div>
                    <div className="service-item"><span>Slimming & drainage</span> <span className="service-price">from $55</span></div>
                    <div className="service-item"><span>Aromatherapy</span> <span className="service-price">from $60</span></div>
                    <div className="service-item"><span>Foot revive treatment</span> <span className="service-price">from $50</span></div>
                </div>
            </div>
        </div>
    );
};

export default Services;