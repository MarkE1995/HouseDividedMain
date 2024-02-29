import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
       
        <div className="right">
          <h4>About Us</h4>
          <p>
           We are just your typical American family with love for God, football, and more.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

            <FaYoutube
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
