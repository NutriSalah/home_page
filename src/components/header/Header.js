import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import pharmacy from "../../assets/pharmacy.jpg";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span id = "dark">Empowering</span>
            <span> you to nourish</span>
            <span>your body with NutriSalah.</span>
          </h1>
          <p className="u-text-small">
          Introducing NutriSalah,<br/>
           We believe that everyone deserves access to affordable, high-quality healthcare and we're on a mission to make that a reality!
          </p>
          <div className="header-cta">
            <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
            <Button text={"Order Now"} btnClass={"btn-light"} href={"#"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={pharmacy} alt="phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
