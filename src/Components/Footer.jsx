import React from "react";
import "../Styles/Footer.css";
import { useDentistStates } from "../Context/Context";

const Footer = () => {
  const { state } = useDentistStates();

  return (
    <footer className={`footer ${state.theme}`}>
      <div className="footer-content">
        <div className="footer-by">
          <p>Powered by</p>
          <img src="./images/DH.png" alt="DH-logo" />
        </div>
        <div className="footer-icons">
          <img src="./images/ico-facebook.png" alt="Facebook" />
          <img src="./images/ico-instagram.png" alt="Instagram" />
          <img src="./images/ico-tiktok.png" alt="TikTok" />
          <img src="./images/ico-whatsapp.png" alt="WhatsApp" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
