import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Team.css';

import member1 from "../../public/images/member1.png";
import member2 from "../../public/images/member2.png";
import member3 from "../../public/images/member3.png";
import fbIcon from "../../public/images/fb.png";
import twitterIcon from "../../public/images/x.png";
import instaIcon from "../../public/images/insta.png";

const Team = () => {
    const stylists = [
        {
            name: "Jaqueline Colon",
            role: "Makeup & Hair Artist",
            image: member1,
            instagram: "https://www.instagram.com/",
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/",
            rating: 4.7
        },
        {
            name: "Wanda Cummerata",
            role: "Nail Specialist",
            image: member2,
            instagram: "https://www.instagram.com/",
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/",
            rating: 5.0
        },
        {
            name: "Cameron Banks",
            role: "Spa Therapist",
            image: member3,
            instagram: "https://www.instagram.com/",
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/",
            rating: 5.0
        }
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star full-star">★</span>);
        }

        if (halfStar) {
            stars.push(<span key="half" className="star half-star">★</span>);
        }

        return <div className="star-rating">{stars}</div>;
    };

    return (
        <div className="container text-center team-container">
            <h1 className="team-title">Our Stylists</h1>

            <div className="row justify-content-center mt-5">
                {stylists.map((stylist, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center mb-4">
                        <div className="card team-member shadow-sm">
                            <img src={stylist.image} alt={stylist.name} className="card-img-top team-image" />
                            <div className="card-body">
                                <h5 className="card-title">{stylist.name}</h5>
                                <p className="card-text stylist-role">{stylist.role}</p>
                                {renderStars(stylist.rating)}
                                <div className="d-flex justify-content-center social-icons mt-3">
                                    <a href={stylist.facebook} target="_blank" rel="noopener noreferrer" className="me-2">
                                        <img src={fbIcon} alt="Facebook" className="social-icon" />
                                    </a>
                                    <a href={stylist.twitter} target="_blank" rel="noopener noreferrer" className="me-2">
                                        <img src={twitterIcon} alt="Twitter" className="social-icon" />
                                    </a>
                                    <a href={stylist.instagram} target="_blank" rel="noopener noreferrer">
                                        <img src={instaIcon} alt="Instagram" className="social-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
