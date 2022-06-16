import React from "react";
import "./network.scss";

import { BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";

const Network = () => {
  return (
    <div className="network">
      <div className="left_network">
        <div className="social">
          <a href="#">
            <GrLinkedinOption />
          </a>
        </div>
        <div className="social">
          <a href="#">
            <FaGithubSquare />
          </a>
        </div>
        <div className="social">
          <a href="#">
            <AiFillInstagram />
          </a>
        </div>
        <div className="line1"></div>
      </div>
      <div className="right_network">
        <p>rodeomads@gmail.com</p>
        <div className="line2"></div>
      </div>
    </div>
  );
};

export default Network;