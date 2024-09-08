import React from "react";
import "../About/About.css";
import profile from "../../assets/profile_img-isMTF2gD.svg";
import pattern from "../../assets/pattern.svg";
function About() {
  return (
    <div id="#about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
        <div className="about-para">
          <p>
            A motivated and detail-oriented front-end developer with one year of
            hands-on experience in building responsive and user-friendly web
            applications.
          </p>
          <p>
            Demonstrates a solid understanding of web development principles,
            cross-browser compatibility, and performance optimization
            techniques.
          </p>
        </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>Html & Css</p>
            <hr style={{ width: "80%" }} />
          </div>
          <div className="about-skill">
            <p>JavaScript</p>
            <hr style={{ width: "60%" }} />
          </div>
          <div className="about-skill">
            <p>React Js</p>
            <hr style={{ width: "80%" }} />
          </div>
          <div className="about-skill">
            <p>TailWind & <br /> GetBootstrap</p>
            <hr style={{ width: "60%" }} />
          </div>
          <div className="about-skill">
            <p>Next Js</p>
            <hr style={{ width: "40%" }} />
          </div>
          </div>
      </div>
      </div>
      <div className="about-achievements">
            <div className="about-achievement">
              <h1>1+</h1>
              <p>Years of Expericence </p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>90+</h1>
              <p>Project Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>15+</h1>
              <p>Happy Clients</p>
            </div>
          </div>
      
    </div>
  );
}

export default About;
