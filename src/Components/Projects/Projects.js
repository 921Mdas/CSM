import React from "react";
import "./project.scss";
import scr from '../../assets/cs.jpeg';
import sales from '../../assets/sales.jpeg';
import marketing from '../../assets/marketing.jpeg';
import { FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  let mm = gsap.matchMedia()


  useEffect(()=>{

   mm.add("(min-width: 600px)", ()=>{
     let tl = gsap.timeline({
       scrollTrigger:{
         trigger:'.projects',
         start:"top 80%",
         end:"top 10%",
         scrub:0.5,
         
       }
     })
 
     tl.fromTo('.project_presentation',{
       y:300, opacity:0
     }, {y:0, opacity:1,duration:1})

   })

  

  

  })


  
   


  
  return (
    <div className={`projects`} id="projects">
      <div className="title project_title_main">
        <span>02.</span> <h1>Timeline</h1>
        <div className="project_line"></div>
      </div>
      <div className={`project_list`}>
        <div className="project_presentation project01">
          <div className="presentation_screen screen_one">
            <div className="overlay_screen1"></div>
            <img src={scr} alt="" />
          </div>
          <div className="presentation_description">
            <div className="project_title">
              <p className="small_title small_title_one">2023 - Present</p>
              <p className="big_title big_title_one">Senior Client Success Manager</p>
            </div>
            <div className="project_descr project_descr_one">
              <p>
                Leading strategic initiatives as a Senior Key Account Manager at Meltwater, 
                driving client success through tailored media, social, consumer, and sales intelligence solutions.
                 Leveraging data insights from over ~1 billion daily content pieces, 
                 I empower global brands to gain a competitive edge and achieve impactful results. 
              </p>
            </div>
            <div className="stack_used">
              <ul>
                <li>Problem Solving</li>
                <li>Active listening</li>
                <li>Risk Analysis</li>
                <li>SalesForce</li>
                <li></li>
              </ul>
            </div>
            <div className="external_links">
              <div className="github">
                <a href="https://www.linkedin.com/in/deo-m-5b873253/" target={"/"}>
                  <FaLinkedin  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project_presentation project02">
          <div className="presentation_screen">
            <div className="overlay_screen2"></div>
            <img src={sales} alt="" />
          </div>
          <div className="presentation_description">
            <div className="project_title">
              <p className="small_title"> 2017 - 2019</p>
              <p className="big_title">Business Development Representative</p>
            </div>
            <div className="project_descr">
              <p>
                Developed and executed groundbreaking sales strategy, capturing significant new market segment and establishing solid
customer base. Led high-performance team, setting ambitious sales targets, supporting career development, and
fostering culture of success. Expanded company’s market share by identifying and capitalizing on opportunities within
previously untapped market.
              </p>
            </div>
            <div className="stack_used">
              <ul>
                <li>Sales</li>
                <li>Negotiations</li>
                <li>Active listening</li>
                <li>Teamwork</li>
              </ul>
            </div>
            <div className="external_links">
              <div className="github">
                <a href="https://www.linkedin.com/in/deo-m-5b873253/" target={"/"}>
                  <FaLinkedin  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project_presentation project03">
          <div className="presentation_screen">
            <div className="overlay_screen1"></div>
            <img src={marketing} alt="" />
          </div>
          <div className="presentation_description">
            <div className="project_title">
              <p className="small_title">2014-2015</p>
              <p className="big_title">Marketing Assistant</p>
            </div>
            <div className="project_descr">
              <p>
                Directed social media and SEO strategies for South Africa’s premier jazz event, driving engagement and expanding
audience reach. Conducted in-depth data analysis and reporting, providing actionable insights to optimize event
marketing strategies and content tonality. Managed high-profile celebrity interviews, enhancing event’s visibility and
appeal.
              </p>
            </div>
            <div className="stack_used">
              <ul>
                <li>SEO</li>
                <li>Reporting</li>
                <li>Data Analysis</li>
              </ul>
            </div>
            <div className="external_links">
              <div className="github">
                 <a href="https://www.linkedin.com/in/deo-m-5b873253/" target={"/"}>
                  <FaLinkedin  />
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
