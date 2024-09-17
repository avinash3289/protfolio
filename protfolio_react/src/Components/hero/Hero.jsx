import React from "react";
import "./Hero.css";
import profileimg from "../../assets/profile_img.svg";
 
const Hero = () => {
  return (
    <>
      <div id="home" className="hero">
        <img src={profileimg} alt="profile" />
        <h1>
          {" "}
          <span>I'm Avinash Boddu , </span> Front-end developer based in India{" "}
        </h1>
        <p>
          {" "}
          Hi i am Avinash btech graduated in 2024 in passion of frontend
          development using react js angular js
        </p>
        <div className="hero-action">
          <div className="hero-connect">Connect With Me</div>
          <a href="/Avinash_Resumeee.pdf" download="My_Resume.pdf" className="hero-resume">
    My Resume
  </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
