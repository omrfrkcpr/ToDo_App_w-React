import React from "react";
import "./Footer.css";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const handleMouseOver = (e) => {
    const eventTarget = e.target.style;
    eventTarget.opacity = "0.6";
    eventTarget.transform = "scale(1.05)";
  };
  const handleMouseOut = (e) => {
    const eventTarget = e.target.style;
    eventTarget.opacity = "1";
    eventTarget.transform = "scale(1)";
  };

  return (
    <div className="d-flex justify-content-between align-items-center footer">
      <div className="left">
        <ul className="social-medias list-unstyled d-flex flex-column">
          <li>
            <a href="https://github.com/omrfrkcpr" target="blank">
              <IoLogoGithub
                style={{ color: "black", fontSize: "40px" }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="github"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/omrfrkcpr/" target="blank">
              <FaLinkedin
                style={{ color: "#0a66c2", fontSize: "40px" }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="linkedin"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/omrfcpr/" target="blank">
              <FaInstagramSquare
                style={{ color: "#EE4C4B", fontSize: "40px" }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="instagram"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="right bg-secondary">
        <h5>
          Copyright &copy; by{" "}
          <span
            onMouseOver={(e) => (e.target.style.color = "black")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Ömer Faruk CAPUR
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Footer;
