import React, {useEffect} from "react";
import gsap from 'gsap';
import "./greet.scss";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

let mm = gsap.matchMedia()


const Greet = () => {

  useEffect(() => {
   let tl = gsap.timeline()

   mm.add("(min-width: 600px)", ()=>{
     tl.fromTo(".greetings", {y:-100,opacity:0 }, {y:0, opacity:1, duration:2, ease:'power2.out'})
     .fromTo('.my_name',{x:100,opacity:0}, {x:0,opacity:1, ease:'power2.out'})
     .fromTo('.whatido', {x:100,opacity:0}, {x:0,opacity:1, ease:'power2.out'})
     .fromTo('.first_statement', {opacity:0},{opacity:1, ease:'power2.out' })
     .fromTo('.second_statement', {opacity:0},{opacity:1, ease:'power2.out' })
   })


  }, []);
  return (
    <div className="landing_page" id="nav">
      <div className="greetings">My name is</div>
      <div className="landing_page_content">

            <div className="initials">
              <h1>DM</h1>
            </div>
            <div className="landing_page_content_description">
                <div className="whoami">
                  <div className="my_name">DEO MADINGU</div>
                  <div className="whatido">Senior Client Success Manager</div>
                </div>
                <div className="statement">
                  <div className="first_statement">
                    Results-driven professional with track record of elevating customer satisfaction for 5+ years and driving substantial business
                    growth through strategic account management and innovative customer success methodologies.
                  </div>
                  <div className="second_statement">
                    <br />
                    Talk to me about customer success methodologies | connecting the dots with data | Data science | Customer Growth .
                     <span>
                    Say hi, I'm looking forward to connecting!
                      </span> 
                  </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Greet;
