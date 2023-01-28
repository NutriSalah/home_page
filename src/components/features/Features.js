import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import Feature from "./Feature";
import { FeatureList } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="rgb(25, 191, 80)" size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small">
          Transform your Health with NutriSalah: The All-in-One Platform for Consultations, Awareness, Nutrition, and Affordable Medical Products with Fast and Free Delivery. 
          </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src="https://images.pexels.com/photos/2565761/pexels-photo-2565761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
