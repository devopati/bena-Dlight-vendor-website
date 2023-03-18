import React, { useEffect } from "react";
import { nokiaData } from "../../Data/nokiaData";
import "./mobile.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobilePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mobile-container">
      <div className="mobile-cards">
        <div className="m-right m-small">
          <div className="m-right-headers">
            <div className="m-header1">
              <span>Mobile</span>
            </div>
            <div className="m-header2">
              <h1>d.light Mobiles</h1>
            </div>
          </div>
        </div>
        <div className="m-left">
          <img
            src="https://www.dlight.com/wp-content/uploads/nokia_G10-DTC-DESIGN-desktop_800.png"
            alt="Mobile"
          />
        </div>
        <div className="m-right m-big">
          <div className="m-right-headers">
            <div className="m-header1">
              <span>Mobile</span>
            </div>
            <div className="m-header2">
              <h1>d.light Mobiles</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="nokia-container">
        <div className="nokia-header">
          <h1>NOKIA</h1>
        </div>
        <div className="nokia-cards">
          {nokiaData.map((item) => {
            return (
              <Link key={item.id} to={`/mobile/${item.id}`}>
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
    </div>
  );
};

export default MobilePage;
