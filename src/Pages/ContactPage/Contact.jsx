import React from "react";
import "./contact.css";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <small>Get in Touch: </small>
        <h2>Contact Me</h2>
      </div>
      <div className="contact-body">
        <div className="contact-card">
          <a href="https://mailto:benardolowah15@gmail.com" target="_blank">
            <div className="email-icon">
              <AiOutlineMail id="contact-icon" />
            </div>
            <h3>Email Me</h3>
            Send Email
          </a>
        </div>
        <div className="contact-card">
          <a
            href={`https://wa.me/+254704027671?text=${encodeURIComponent(
              `Hello! I'm interested in your d.light pay-as-you-go products. Provide me with more information on the Products. Thank you!`
            )}`}
            target="_blank"
          >
            <div className="whatsapp-icon">
              <BsWhatsapp id="contact-icon" />
            </div>
            <h3> Whatsapp</h3>
            Send Message
          </a>
        </div>
        <div className="contact-card">
          <a href="tel:+254704027671">
            <div className="phone-icon">
              <AiOutlinePhone id="contact-icon" />
            </div>
            <h3>Phone</h3>
            <h4> Call me</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
