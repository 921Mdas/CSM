import React, { useState, useRef} from "react";
import "./about.scss";

import { SiRedux, SiMongodb } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaFileContract } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import deo from "../../assets/Deo.jpeg";
import { IoIosTrendingUp } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import Skill from "./Skill";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const [pos, setPos] = useState(0);
  window.addEventListener("scroll", () => {
    setPos(window.scrollY);
  });

  useEffect(()=>{

    let mm = gsap.matchMedia()
    
    let tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.about',
        start:"top 70%",
        end:"bottom 100%",
        scrub:0.5
      }
    })


    mm.add("(min-width: 600px)", ()=>{

      tl.fromTo('.title', {x:100,opacity:0},{x:0, opacity:1}).fromTo('.avatar',{
     y:100,opacity:0, scale:0.9
    }, {y:0, opacity:1, scale:1}).fromTo('.brand_mainstatement', {
      opacity:0,y:100
    }, {opacity:1,y:0}).fromTo('.brand_substatement',{
      opacity:0,y:100
    },{opacity:1,y:0}).fromTo('.brand_outside_work',{
      opacity:0, x:100
    }, {opacity:1,x:0})

   
    let tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:'.stacks',
        start:"top 70%",
        end:"bottom 50%",
        scrub:0.5,
        
      }
    })

    tl2.fromTo('.stacks_list', {x:1000,opacity:0}, {x:0, opacity:1, duration:5})
    })

    

  
  },[])


  return (
    <div className={`about`} id="about">
      <div className="title">
        <span>01.</span> <h1>About Me</h1>
        <div className="about_line"></div>
      </div>

      <div className={`about_brandstatement`} >
        <div className="avatar">
          <img src={deo} alt="" className="avatarprofileimg" />
        </div>
        <div className="brandstatement">
          <span>
            <span className="brand_mainstatement">

            🧑🏾‍💻 The world is drowning in information. To manage it, we need the right tools to remove the noise and find what can inform strategy: software. I love the SaaS era and what it brings as a solution to previously complex and time-consuming problems. I enjoy helping clients understanding the software at their disposal and how they can best use data to grow revenue.
            </span>
            <br />
            <br />
            <span className="brand_substatement">

            I specialize in sales, particularly client success. With my ability to build strong relationships and my reliability in delivering what I commit to, I succeed in solving problems and growing accounts. In 2022, My work with software sparked an additional interest, I wanted to look under the hood and see how everything connects. I have since graduated as a full-stack software developer and use my newly acquired skills to better connect software with people.
            </span>
            <br/>
            <br/>
            <div className="brand_outside_work">
            <strong>
              Outside of work:
              </strong> 🍣 🎵 👨‍👩‍👧 🌿 Sushi, Music, Family, Nature, repeat. 🍣 🎵 👨‍👩‍👧 🌿 
            </div>
          </span>
          
        </div>
      </div>

      <div className="stacks">
        <h2 className="stacks_title">My Skills:</h2>

        <div className={`stacks_list`}>
          <div className="stack_list1 stack_skill">
            <Skill Icon={FaFolder} skilltitle={"Account Management"} />
            <Skill Icon={IoPeopleCircleOutline} skilltitle={"Customer Success"} />
            <Skill Icon={ IoIosTrendingUp} skilltitle={"Client Engagement"} />
          </div>
          <div className="stack_list2 stack_skill">
            <Skill Icon={BsBriefcaseFill} skilltitle={"Executive Advisory"} />
            <Skill Icon={FaFileContract} skilltitle={"Renewal Strategies"} />
            <Skill Icon={MdOutlineEmail} skilltitle={"Communication"} />
          </div>
          <div className="stack_list2 stack_skill">
            <Skill Icon={SiMongodb} skilltitle={"Customer Advocacy"} />
            <Skill Icon={FaLink} skilltitle={"Relationship building"} />
            <Skill Icon={GiReceiveMoney} skilltitle={"Revenue Growth"} />
          </div>
          <div className="stack_list2 stack_skill">
            <Skill Icon={BiGitBranch}  skilltitle={"Client Onboarding"} />
            <Skill Icon={AiFillApi} skilltitle={"Usage Optimization"} />
            <Skill Icon={AiFillCheckCircle} skilltitle={"Strategic Consulting"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
