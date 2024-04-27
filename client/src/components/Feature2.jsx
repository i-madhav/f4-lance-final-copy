import React from 'react'
import aboutimage from "../images/fitness 10.jpg"
import aboutimage2 from "../images/zumba2.avif"

import w1 from "../images/zumba1.webp"
import w2 from "../images/zumba2.avif"
import w3 from "../images/zumba3.avif"
import w4 from "../images/zumba4.avif"
const bannerImg = {
    // backgroundImage: `URL(${patten})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100vw",

}
const bannerh1 = {
    fontSize: "4rem",

}
const workout ={
    marginLeft: "45px", 
}
const bannerh2 = {
    fontSize: "4rem",


    color: "black"


}
const textContainer = {
   
    
}

function Feature2() {
    return (
        <>
            <div className='flex items-center justify-center testimonal featuresss text-center'>
                <div className='container testimonal text-white '>
                    <div
                        className='sm:min-h-[400px] sm:flex sm:justify-end 
              sm:items-center rounded-xl  featureImage '> 
              <div className='feature1-box1'><img src={w1}/></div>
              <div className='feature1-box1'><img src={w2}/></div>
              <div className='feature1-box1'><img src={w3}/></div>
              <div className='feature1-box1'><img src={w4}/></div>
              <div className='black'></div>


                        <div className='feature-div'>
                            <div className='feature-text' style={workout}><h1>        ZUMBA</h1></div>


                        </div>

                    </div>
                </div>
            </div>
            <div id='about'>
                <div className='about-image'>
                    <img src={aboutimage} alt="" data-aos="fade-left" data-aos-duration="1500" />
                </div>
                <div className='about-text' data-aos="fade-right" data-aos-duration="1500">
                <img src={aboutimage} alt="" data-aos="fade-left" data-aos-duration="1500" />
                    <h1>LEARN MORE ZUMBA</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, beatae!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolores ratione
                        maiores quo nemo vel voluptatem nostrum cumque natus aliquam!lorem10 Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Consequuntur tempore rem dolores
                        temporibus cumque delectus, est illum culpa, id adipisci non.
                        Dolorem natus maxime eaque, aut obcaecati dolorum dolore molestiae.

                    </p>
                    
                </div>
            </div>
            <div id='about'>

                <div className='about-text' data-aos="fade-right" data-aos-duration="1500">
                <img src={aboutimage2} alt="" data-aos="fade-left" data-aos-duration="1500" />

                    <h1>LEARN MORE ZUMBA</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, beatae!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolores ratione
                        maiores quo nemo vel voluptatem nostrum cumque natus aliquam!lorem10 Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Consequuntur tempore rem dolores
                        temporibus cumque delectus, est illum culpa, id adipisci non.
                        Dolorem natus maxime eaque, aut obcaecati dolorum dolore molestiae.

                    </p>
                    
                </div>
                <div className='about-image'>
                    <img src={aboutimage2} alt="" data-aos="fade-left" data-aos-duration="1500" />
                </div>
            </div>

        </>

    )
}

export default Feature2