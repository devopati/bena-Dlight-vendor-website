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
      <div
        className="f-c-contents"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1500"
      >
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
          <motion.a
            href="https://www.facebook.com/benard.olowah"
            whileHover={{ y: -5 }}
            target="_blank"
          >
            <BsFacebook id="footer-icon" />
          </motion.a>
          <motion.a
            href="https://twitter.com/OlowahP?t=AuIBdeOjIIHA1EQEt5VmZQ&s=08"
            whileHover={{ y: -5 }}
            target="_blank"
          >
            <BsTwitter id="footer-icon" />
          </motion.a>
          <motion.a
            href="https://instagram.com/benardolowah?igshid=ZDdkNTZiNTM="
            whileHover={{ y: -5 }}
            target="_blank"
          >
            <BsInstagram id="footer-icon" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/benard-owino-b5a0b3244"
            whileHover={{ y: -5 }}
            target="_blank"
          >
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
