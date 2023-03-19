import React from "react";
import "./footer.css";
import {
  BsArrowRightShort,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const getCurrentYear = new Date().getUTCFullYear();

  return (
    <div className="footer-container">
      <div className="f-c-contents">
        <div className="footer-contact">
          <div className="f-contact-h3">
            <h3>For Purchases and inquiries</h3>
          </div>
          <div className="f-btn">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="footer-btn"
              >
                Contact Me <BsArrowRightShort id="f-icon" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-last">
        <div className="footer-logo">
          <motion.img
            src="https://www.dlight.com/wp-content/themes/dlight-baunfire/img/logonew-footer.png"
            alt="LOGO"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div className="footer-icons">
          <motion.a href="#" whileHover={{ y: -5 }}>
            <BsFacebook id="footer-icon" />
          </motion.a>
          <motion.a href="#" whileHover={{ y: -5 }}>
            <BsTwitter id="footer-icon" />
          </motion.a>
          <motion.a href="#" whileHover={{ y: -5 }}>
            <BsInstagram id="footer-icon" />
          </motion.a>
          <motion.a href="#" whileHover={{ y: -5 }}>
            <BsLinkedin id="footer-icon" />
          </motion.a>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="f-copyright">
          <small>
            Copyright &copy; {getCurrentYear} Benard. Dlight All rights
            reserved.{" "}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
