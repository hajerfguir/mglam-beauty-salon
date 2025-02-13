import React from "react";
import "./Footer.css"; // ✅ Assure-toi que le CSS est bien importé

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo centré */}
      <div className="footer-logo">
        <img src="/images/logo-transparent.png" alt="M.Glam Beauty Salon Logo" />
      </div>

      {/* Nom & Description */}
      <h2 className="footer-title">M.Glam Beauty Salon</h2>
      <p className="footer-description">
        Découvrez l'excellence et le bien-être chez M.Glam Beauty Salon. Nos experts en soins de beauté vous offrent des services de qualité pour sublimer votre apparence et renforcer votre confiance en vous.
      </p>

      {/* Icônes des réseaux sociaux */}
      <div className="footer-icons">
        <img src="/images/fb.png" alt="Facebook" />
        <img src="/images/insta.png" alt="Instagram" />
        <img src="/images/x.png" alt="Twitter" />
      </div>

      {/* Mentions légales (footer.png) */}
      <div className="footer-terms">
        <img src="/images/footer.png" alt="Mentions légales" />
      </div>
    </footer>
  );
};

export default Footer;
