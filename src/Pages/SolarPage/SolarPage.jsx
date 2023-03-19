import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { solarSystemsData } from "../../Data/solarData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const SolarPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <motion.div
      className="mobile-container"
      animate={{ opacity: [0, 0, 1, 1] }}
      exit={{ opacity: [1, 1, 0, 0] }}
      transition={{ type: "tween", duration: 1 }}
    >
      <div className="mobile-cards">
        <div className="m-right m-small">
          <div className="m-right-headers">
            <div className="m-header1">
              <span>Solar Product</span>
            </div>
            <div className="m-header2">
              <h1>Find the best d.light for you</h1>
            </div>
          </div>
        </div>
        <div className="m-left">
          <img
            src="https://www.dlight.com/wp-content/uploads/2018/09/product-hero.jpg"
            alt="Mobile"
          />
        </div>
        <div className="m-right m-big">
          <div className="m-right-headers">
            <div className="m-header1">
              <span>Solar Product</span>
            </div>
            <div className="m-header2">
              <h1>Find the best d.light for you</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="nokia-container">
        <div className="nokia-header">
          <h1>Solar Home Systems</h1>
        </div>
        <div className="nokia-cards">
          {solarSystemsData.map((item) => {
            return (
              <Link key={item.id} to={`/solar/${item.brand}/${item.id}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="nokia-card"
                  data-aos="zoom-in"
                >
                  <div className="nokia-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="nokia-below">
                    <div className="n-t1">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="n-t2">
                      <span>{item.title}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      {/*===========================================================================*/}
      <div className="nokia-container">
        <div className="mobilePage-last">
          <div className="m-last-logo">
            <img
              src="https://www.dlight.com/wp-content/themes/dlight-baunfire/img/logo-dlight-solar@2x-upv1.png"
              alt="LOGO"
            />
          </div>
          <div className="m-last-description">
            <div className="m-last-header">
              <span>Why Choose d.light?</span>
            </div>
            <p>
              Our groundbreaking categories make life brighter by transforming
              lives with sustainable products. We have great and aspirational
              products in mobile, tv, cookstoves, fans, and solar. All these are
              within the industry standard of 2-year warranty and are Verasol
              certified. d.light has sold over 25 million solar products across
              70 different countries and is a global brand that you can trust.
            </p>
            <br />
            <br />
            <br />
            <br />

            <div className="mobile-product-btn">
              <div className="m-p-btn">
                <BsFillArrowRightCircleFill id="m-p-icon" />
                <h4>The d.light Difference</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SolarPage;
