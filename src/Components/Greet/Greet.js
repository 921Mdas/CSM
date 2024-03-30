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
                    "Hey there! 🌟 I'm a dynamic professional with over 5 years of experience in boosting customer satisfaction and driving business growth.
                     <br />
                     <br />
                     💼 I'm all about connecting the dots with data 📊 and leveraging innovative customer success methodologies to achieve stellar results.
                     <br/>
                     <br/>
                     💡 From unraveling insights with data science 📈 to fostering customer growth 🚀, I'm passionate about crafting experiences that not only delight customers but also propel businesses forward. 
                  </div>
                  <div className="second_statement">
                    <br />
                    Looking forward to connecting!
                  </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Greet;
