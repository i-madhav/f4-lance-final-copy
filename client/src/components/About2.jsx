import React , {useState}from 'react'
import aboutimage from "../images/fitness 4.jpg"
import aboutimage2 from "../images/fitness2.jpg"
import vedio from "../images/headervedio2.mp4"

function About() {
 
    const [isHovered, setIsHovered] = useState(false);
  
    const handleHover = () => {
      setIsHovered(!isHovered);
    };
  return (
    <div id='about'>
        <div className={vedio} onMouseEnter={handleHover} onMouseLeave={handleHover}>
 
      
            {/* <img src={aboutimage} alt="" data-aos="fade-left" data-aos-duration="1500" /> */}
            <img src={aboutimage} alt="Video Thumbnail" width="520" height="540" />

        </div>
        <div className='about-text' data-aos="fade-right" data-aos-duration="1500" >
            <h1>LA FITNESS </h1>
            <p>LA FITNESS is the Premier Personal Training option for Noida, Noida Extension and surrounding areas.
               We are a team of qualified and professional Gym Offering the best cutting edge based Training
                options for weight loss, athletic performance, body building, toning, strength, sports specific 
                training, Power Yoga, Diet Plans & Nutritional counselling whatever your fitness goals may be,
                 we will lead you to the finish line and beyond.


            </p>

        </div>

        <div className='about-text' data-aos="fade-right" data-aos-duration="1500">
            <h1>LA FITNESS </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, beatae!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolores ratione
                maiores quo nemo vel voluptatem nostrum cumque natus aliquam!lorem10 Lorem ipsum 
                dolor sit amet consectetur adipisicing elit. Consequuntur tempore rem dolores 
                temporibus cumque delectus, est illum culpa, id adipisci non.
                Dolorem natus maxime eaque, aut obcaecati dolorum dolore molestiae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, hic.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam provident eius unde sed vitae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, libero perferendis. Magni, 
                asperiores sunt natus nesciunt, libero quis iure tenetur incidunt accusamus similique at vero, 
                a dolores eaque harum vel!

            </p>
       
        </div>
        <div className={vedio} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        {isHovered ? (
        <video width="720" height="740"autoPlay loop muted>
          <source src={vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={aboutimage2} alt="Video Thumbnail" width="520" height="540" />
      )}
            {/* <img src={aboutimage} alt="" data-aos="fade-left" data-aos-duration="1500" /> */}
        </div>
        <div className='about-text' data-aos="fade-right" data-aos-duration="1500">
           
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, beatae!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolores ratione
                maiores quo nemo vel voluptatem nostrum cumque natus aliquam!lorem10 Lorem ipsum 
                dolor sit amet consectetur adipisicing elit. Consequuntur tempore rem dolores 
                temporibus cumque delectus, est illum culpa, id adipisci non.
                Dolorem natus maxime eaque, aut obcaecati dolorum dolore molestiae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, hic.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam provident eius unde sed vitae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, libero perferendis. Magni, 
                asperiores sunt natus nesciunt, libero quis iure tenetur incidunt accusamus similique at vero, 
                a dolores eaque harum vel!

            </p>
       
        </div>
        <div className='about-text' data-aos="fade-right" data-aos-duration="1500">
          
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, beatae!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolores ratione
                maiores quo nemo vel voluptatem nostrum cumque natus aliquam!lorem10 Lorem ipsum 
                dolor sit amet consectetur adipisicing elit. Consequuntur tempore rem dolores 
                temporibus cumque delectus, est illum culpa, id adipisci non.
                Dolorem natus maxime eaque, aut obcaecati dolorum dolore molestiae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, hic.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam provident eius unde sed vitae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, libero perferendis. Magni, 
                asperiores sunt natus nesciunt, libero quis iure tenetur incidunt accusamus similique at vero, 
                a dolores eaque harum vel!

            </p>
       
        </div>
    </div>
  )
}

export default About