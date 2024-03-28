import React from "react";
import "./contact.scss";
import Footer from "../Contact/Footer";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact_section" id="Contact">
        <div className="title">
          <div className="first_title">
            <span>03.</span> <p>Next step</p>
          </div>
          <p className="big_title">Contact Me</p>
        </div>

        <div className="message">
          My inbox is always
          open. Say hi! <br /> <br /> Email:
          rodeomads@gmail.com
          <div className="social_networks">
            <div className="social">
              <a href="https://www.linkedin.com/">
                <GrLinkedinOption />
              </a>
            </div>
            <div className="social">
              <a href="https://github.com/921Mdas/">
                <FaGithubSquare />
              </a>
            </div>
            <div className="social">
              <a href="https://www.instagram.com/">
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="Emailme">
          <form action="mailto:rodeomads@gmail.com" method="GET">
            <button className="email">Contact me</button>
          </form>
        </div>

        <div className="scrollup">
          <a href="#nav">
            <AiOutlineArrowUp />
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
