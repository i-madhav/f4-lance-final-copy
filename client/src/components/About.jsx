import React from 'react'
import aboutimage from "../images/fitness 3.jpg"
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div id='about'>
        <div className='about-image new-ab-img'>
            <img src={aboutimage} alt="" data-aos="fade-left" data-aos-duration="1500" />
        </div>
        <div className='about-text about-new-text' data-aos="fade-right" data-aos-duration="1500">
        <img src={aboutimage} alt="" data-aos="fade-left" data-aos-duration="1500" id='mobimg'/>

            <h1>LA FITNESS </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, beatae!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolores ratione
                 maiores quo nemo vel voluptatem nostrum cumque natus aliquam!lorem10 Lorem ipsum 
                 dolor sit amet consectetur adipisicing elit. Consequuntur tempore rem dolores 
                 temporibus cumque delectus, est illum culpa, id adipisci non.
                  Dolorem natus maxime eaque, aut obcaecati dolorum dolore molestiae.

            </p>
            <button><NavLink to="/about2">READ MORE</NavLink></button>
        </div>
    </div>
  )
}

export default About