import React from 'react';
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

    // Function to render star ratings
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
        <div className="team-container">
            {/* Title */}
            <h1 className="team-title">Our Stylists</h1>

            {/* Bootstrap Grid Layout */}
            <div className="container">
                <div className="row justify-content-center team-grid">
                    {stylists.map((stylist, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                            <div className="team-member">
                                <img src={stylist.image} alt={stylist.name} className="team-image" />
                                <h3>{stylist.name}</h3>
                                <p className="stylist-role">{stylist.role}</p>

                                {/* Star Ratings */}
                                {renderStars(stylist.rating)}

                                {/* Social Icons */}
                                <div className="social-icons">
                                    <a href={stylist.facebook} target="_blank" rel="noopener noreferrer">
                                        <img src="/images/fb.png" alt="Facebook" className="social-icon" />
                                    </a>
                                    <a href={stylist.twitter} target="_blank" rel="noopener noreferrer">
                                        <img src="/images/x.png" alt="Twitter" className="social-icon" />
                                    </a>
                                    <a href={stylist.instagram} target="_blank" rel="noopener noreferrer">
                                        <img src="/images/insta.png" alt="Instagram" className="social-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
