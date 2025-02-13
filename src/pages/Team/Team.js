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
            twitter: "https://twitter.com/"
        },
        {
            name: "Wanda Cummerata",
            role: "Nail Specialist",
            image: "/images/member2.png",
            instagram: "https://www.instagram.com/",
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/"
        },
        {
            name: "Cameron Banks",
            role: "Spa Therapist",
            image: "/images/member3.png",
            instagram: "https://www.instagram.com/",
            facebook: "https://www.facebook.com/",
            twitter: "https://twitter.com/"
        }
    ];

    return (
        <div className="team-container">
            {/* Title */}
            <h1 className="team-title">Our Stylists</h1>

            {/* Team Grid */}
            <div className="team-grid">
                {stylists.map((stylist, index) => (
                    <div key={index} className="team-member">
                        <img src={stylist.image} alt={stylist.name} className="team-image" />
                        <h3>{stylist.name}</h3>
                        <p className="stylist-role">{stylist.role}</p>

                        {/* Social Icons using Images */}
                        <div className="social-icons">
                            <a href={stylist.instagram} target="_blank" rel="noopener noreferrer">
                                <img src="/images/insta.png" alt="Instagram" className="social-icon" />
                            </a>
                            <a href={stylist.facebook} target="_blank" rel="noopener noreferrer">
                                <img src="/images/fb.png" alt="Facebook" className="social-icon" />
                            </a>
                            <a href={stylist.twitter} target="_blank" rel="noopener noreferrer">
                                <img src="/images/x.png" alt="Twitter" className="social-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
