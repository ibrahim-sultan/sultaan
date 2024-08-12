import React from "react";
import "./about.css";
import theme from "../../src/assets/theme.svg";
import profileImg from "../../src/assets/sulty.jpg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img className="about-profile" src={profileImg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experience frontend developer with over 5 years of
              professional expertise in the field. Throughtout my career, i have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication i
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML&CSS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>BootStrap</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="achievements">
        <div className="about-achievement">
          <h1>5</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
