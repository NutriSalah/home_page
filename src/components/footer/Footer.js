import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About Us</a>
            <a href="#">&bull; Products</a>
            <a href="#">&bull; Services</a>
            <a href="#">&bull; Health Information</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; Cart</a>
            <a href="#">&bull; Orders</a>
            <a href="#">&bull; FAQs</a>
            <a href="#">&bull; Testimonials</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address:  Navi, Mumbai, India.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +12342762178
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@nutrisalah.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.nutrisalah.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          {/* <img src={logo} alt="logo" /> */}
          <p className="u-text-small">&copy; Copyright 2023. NutriSalah</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
