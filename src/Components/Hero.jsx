import React from "react";
import "./hero.css";
import profileImg from "../../src/assets/sulty.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="home" className="hero">
      <img className="hero-profile" src={profileImg} alt="" />
      <h1>
        <span>I'm Ibrahim Sultan,</span> frontend developer based in Nigeria.
      </h1>
      <p>
        I am a frontend developer from Ilorin, Nigeria with 5 years of
        experience in multiple companies like Betfarm, Malhub and Alhikmah
        University.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
