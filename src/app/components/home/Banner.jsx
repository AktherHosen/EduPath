import Image from "next/image";
import React from "react";
import BannerImg from "../../../../public/asset/banner.png";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container content">
        <div class="text-content">
          <div class="rating">
            <div class="stars">
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStarHalf className="star" />
            </div>
            <span class="reviews">4.9 (566)</span>
          </div>
          <h1>#1 Platform Powering Health and Wellness</h1>
          <p class="sub-heading">
            We’re restoring home as the primary place of personal well-being
          </p>
          <p class="description">
            Health is not just about what you’re eating. It’s also about what
            you’re thinking and saying.
          </p>
          <div class="buttons">
            <button class="primary">Browse Courses</button>
            <button class="secondary">Get Started</button>
          </div>
        </div>
        <div className="image-content">
          <Image className="banner-img" src={BannerImg} alt="banner image" />
          <div className="highlights">
            <div className="student">
              <h2>12,000+</h2>
              <div className="line"></div>
              <p>
                Happy learners rely on <br /> us regularly
              </p>
            </div>
            <div className="title">
              <h6>Find your wellbeing</h6>
              <p>
                By prioritizing self-care and making informed choices, <br />{" "}
                one can enhance their overall quality of life
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
