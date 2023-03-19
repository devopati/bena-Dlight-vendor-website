import React from "react";
import "./about.css";
import {
  BsFillArrowRightCircleFill,
  BsArrowLeftCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 0, 1, 1] }}
      exit={{ opacity: [1, 1, 0, 0] }}
      transition={{ type: "tween", duration: 1 }}
      className="about-container"
    >
      <div className="about-top">
        <div className="about-card2 small">
          <span>Background</span>
          <br />
          <br />
          <h1>Learn more about d.light</h1>
        </div>
        <div className="about-card1">
          <img
            src="https://www.dlight.com/wp-content/uploads/2018/09/about-hero.jpg"
            alt="image"
            data-aos="zoom-in"
          />
        </div>
        <div className="about-card2 big">
          <span>Background</span>
          <br />
          <br />
          <h1>Learn more about d.light</h1>
        </div>
      </div>
      <div className="about-bottom">
        <div className="about-bcard1">
          <h2>Making Life Brighter</h2>
          <br />
          <br />
          <p>
            d.light is a global leader in social transformation by making
            transformative products available and affordable to low-income
            families. Most of the customers we serve don’t have access to
            reliable power or financing, and d.light removes those barriers. We
            enable reliable power through our solar energy solutions and enable
            financing with our Pay As You Go technology. d.light has sold over
            25 million products including solar lanterns, solar home systems,
            TVs, radios and smartphones, impacting the lives of over 125 million
            people. Our vision is to transform the lives of 1 billion people
            with sustainable products by 2030.
          </p>
        </div>
        <div className="about-bcard2">
          <img
            src="https://www.dlight.com/wp-content/uploads/2019/08/Screen-Shot-2019-08-29-at-7.55.12-PM.png"
            alt="About"
          />
        </div>
      </div>
      <div className="about-btns">
        <div className="about-btn1">
          <div className="mobile-product-btn">
            <Link to="/mobile" style={{ color: "black" }}>
              <div className="m-p-btn">
                <BsArrowLeftCircleFill id="m-p-icon" />
                <h4>View Products</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="about-btn1">
          <div className="mobile-product-btn">
            <Link to="/contact" style={{ color: "black" }}>
              <div className="m-p-btn">
                <h4>Find out More</h4>
                <BsFillArrowRightCircleFill id="m-p-icon" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
