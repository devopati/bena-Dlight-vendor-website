import React from "react";
import "./footer.css";
import {
  BsArrowRightShort,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
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
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="footer-btn"
            >
              Contact Me <BsArrowRightShort id="f-icon" />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="footer-last">
        <div className="footer-logo">
          <img
            src="https://www.dlight.com/wp-content/themes/dlight-baunfire/img/logonew-footer.png"
            alt="LOGO"
          />
        </div>
        <div className="footer-icons">
          <BsFacebook id="footer-icon" />
          <BsTwitter id="footer-icon" />
          <BsInstagram id="footer-icon" />
          <BsLinkedin id="footer-icon" />
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
