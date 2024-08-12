import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";
import { CiUser } from "react-icons/ci";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="logo" src={logo} alt="" />
          <p>
            I am a frontend developer from Ilorin, Nigeria with 5 years of
            experience in multiple companies like Betfarm, Malhub and Alhikmah
            University.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <CiUser />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          2024 Ibrahim Sultan . All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
