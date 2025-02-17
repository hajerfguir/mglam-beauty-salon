import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Team.css';

const Team = () => {
    const stylists = [
        {
            name: "Jaqueline Colon",
            role: "Makeup & Hair Artist",
            image: "/images/member1.png",
            instagram: "https://www.instagram.com/",
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/",
            rating: 4.7
        },
        {
            name: "Wanda Cummerata",
            role: "Nail Specialist",
            image: "/images/member2.png",
            instagram: "https://www.instagram.com/",
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/",
            rating: 5.0
        },
        {
            name: "Cameron Banks",
            role: "Spa Therapist",
            image: "/images/member3.png",
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
                                        <img src="/images/fb.png" alt="Facebook" className="social-icon" />
                                    </a>
                                    <a href={stylist.twitter} target="_blank" rel="noopener noreferrer" className="me-2">
                                        <img src="/images/x.png" alt="Twitter" className="social-icon" />
                                    </a>
                                    <a href={stylist.instagram} target="_blank" rel="noopener noreferrer">
                                        <img src="/images/insta.png" alt="Instagram" className="social-icon" />
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
