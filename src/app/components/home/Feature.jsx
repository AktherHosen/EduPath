import Image from "next/image";
import React from "react";
import FeatureImg from "../../../../public/asset/feature.png";
import { PiShieldCheckFill } from "react-icons/pi";
import { PiCheckCircleFill } from "react-icons/pi";
const Feature = () => {
  return (
    <div className="container features">
      <div className="left">
        <h1>We provide...</h1>

        <div className="feature-title-container">
          <div className="feature-title">
            <PiCheckCircleFill />
            <h4>Personalized routine</h4>
          </div>
          <div className="feature-title">
            <PiCheckCircleFill />
            <h4>Follow-up after completing courses</h4>
          </div>
        </div>
      </div>
      <div className="right">
        <Image src={FeatureImg} alt="feature image" className="feature-img" />
        <div className="icon-container">
          <PiShieldCheckFill className="shield-icon" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
