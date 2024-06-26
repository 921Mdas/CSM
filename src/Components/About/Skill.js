import React from "react";
import "./about.scss";
import { BiRightArrow } from "react-icons/bi";

const Skill = ({ Icon, skilltitle }) => {
  return (
    <div className="stack1 stack1Comp">
      <Icon className="skill_icon_comp" />
      <p className="skill_name">{skilltitle}</p>
    </div>
  );
};

export default Skill;
