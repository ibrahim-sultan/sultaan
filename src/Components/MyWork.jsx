import React from "react";
import "./mywork.css";
import theme from "../../src/assets/theme.svg";
import mywork_data from "../assets/mywork_data";
import { FaArrowRight } from "react-icons/fa";

function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest work</h1>
        <img src={theme} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img className="work-img" key={index} src={work.w_img} alt="" />
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <FaArrowRight />
      </div>
    </div>
  );
}

export default MyWork;
