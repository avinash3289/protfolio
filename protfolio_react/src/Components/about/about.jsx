import React from "react";
import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
const About = () => {
  return (
    <>
      <div  id='about' className="About">
        <div className="about-tittle">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
           
          <div className="about-right">
            <div className="about-para">
              <p>
                I am an experienced front end developer with over a decade of
                professional expertise in the field Throughout my career,I have
                had the privilege of collaborating with prestigious
                organizations,contributing to their success and growth.
              </p>
              <p>
                My passion for frontenddevelopment is not only reflected in my
                extensive experience but also in the enthusiasm and deducation i
                bring to each project
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>React Js</p>
                <hr style={{ width: "100%" }} />
              </div>
              <div className="about-skill">
                <p>Core Java</p>
                <hr style={{ width: "40%" }} />
              </div>
              <div className="about-skill">
                <p>javaScript</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>Angular Js</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Node js</p>
                <hr style={{ width: "60%" }} />
              </div>
               
            </div>
           

          </div>
        </div>
        <div className="about-achievements">
                <div className="achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>

            </div>
      </div>
    </>
  );
};

export default About;
