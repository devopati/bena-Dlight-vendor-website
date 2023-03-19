import React, { useEffect } from "react";
import "./home.css";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <motion.div
      animate={{ opacity: [0, 0, 1, 1] }}
      exit={{ opacity: [1, 1, 0, 0] }}
      transition={{ type: "tween", duration: 1 }}
      className="homepage-container"
    >
      <div className="homepage-header">
        <div className="home-header1">
          <Typewriter
            options={{
              strings: [
                "Affordable, quality verified, entertainment solutions for you. ",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <h1>Making Life Brighter</h1>

          <br />
          <p>
            Affordable, quality verified, solar lighting, and entertainment
            solutions designed for low-income households. Through the deployment
            of sustainable products, d.light has empowered over 137 million
            lives and offset 26 million tons of CO2. And we're just getting
            started.
          </p>
          <br />
          <br />
          <br />
          <div className="mobile-product-btn">
            <Link to="/solar">
              {" "}
              <div className="m-p-btn m-p-last" style={{ color: "black" }}>
                <BsFillArrowRightCircleFill id="m-p-icon" />
                <h4>View Solar Products</h4>
                <br />
              </div>
            </Link>
          </div>
        </div>
        <div className="home-header2">
          <img
            src="https://www.dlight.com/wp-content/uploads/2020/02/preview-lightbox-dlightworld.jpg"
            alt="header"
          />
        </div>
      </div>
      <div className="home-featured-products">
        <div className="featured-p-header">
          <h1>Featured Products </h1>
          <br />
          <br />
          <p>
            Our suite of high-quality products power millions of homes and
            businesses every day.
          </p>
          <br />
          <br />
          <br />
          <div className="mobile-product-btn">
            <Link to="/mobile">
              <div className="m-p-btn m-p-last" style={{ color: "black" }}>
                <BsFillArrowRightCircleFill id="m-p-icon" />
                <h4>View mobile Products</h4>
                <br />
              </div>
            </Link>
          </div>
        </div>
        <div className="featured-p-body" data-aos="zoom-in-down">
          <img
            src="https://www.dlight.com/wp-content/uploads/featured_products.png"
            alt="featured"
          />
        </div>
      </div>
      <div className="home-how-to">
        <h1>HOW TO PURCHASE</h1>
        <br />
        <p>It's as easy as:</p>
        <br />
        <br />
        <div className="home-how-cards">
          <div className="home-how-card" data-aos="fade-right">
            <small>Step</small>
            <h3>1</h3>
            <h4>Click on the Product</h4>
          </div>
          <div className="home-how-card" data-aos="fade-up-left">
            <small>Step</small>
            <h3>2</h3>
            <h4>Select Buy Now</h4>
          </div>
          <div className="home-how-card" data-aos="fade-right">
            <small>Step</small>
            <h3>3</h3>
            <h4>Inquiry of the product</h4>
          </div>
          <div className="home-how-card" data-aos="fade-down-left">
            <small>Step</small>
            <h3>4</h3>
            <h4>Delivery to where you are</h4>
          </div>
          <div className="home-how-card" data-aos="fade-up">
            <small>Step</small>
            <h3>5</h3>
            <h4>Payment and activation</h4>
          </div>
        </div>
        <br />
        <br />
        <div className="mobile-product-btn">
          <Link to="/mobile">
            <div className="m-p-btn m-p-last" style={{ color: "black" }}>
              <BsFillArrowRightCircleFill id="m-p-icon" />
              <h4>View available Products</h4>
              <br />
            </div>
          </Link>
        </div>
        <br />
        <br />
        <br />
      </div>
    </motion.div>
  );
};

export default Home;
