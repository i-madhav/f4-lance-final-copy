import React from 'react'
import aboutimage from "../images/sauna4.jpg"
import aboutimage2 from "../images/sauna 2.jpg"

import w1 from "../images/sauna 1.jpg"
import w2 from "../images/sauna4.jpg"
import w3 from "../images/sauna5.jpg"
import w4 from "../images/saunabg.jpg"

const bannerImg = {
    // backgroundImage: `URL(${patten})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100vw",

}
const workout ={
    marginLeft: "1px", 
}

const bannerh1 = {
    fontSize: "4rem",
    
}
const bannerh2 = {
    fontSize: "4rem",
    
   
    color:"red"
    
}
const textContainer = {
    textAlign : "center"
}


function Feature3() {
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
                            <div className='feature-text'><h1 style={workout}>SAUNA</h1></div>


                        </div>

                    </div>
                </div>
            </div>
            <div id='about'>
                <div className='about-image'>
                    <img src={aboutimage} alt="" data-aos="fade-left" data-aos-duration="1500" />
                </div>
                <div className='about-text' data-aos="fade-right" data-aos-duration="1500">
                <img src={aboutimage} alt="Video Thumbnail" width="520" height="540" id='mobimg' />

                    <h1>AROMATHERAPY</h1>
                    <p>Enhance the sauna experience by offering aromatherapy options, such as essential oils or
                         infused water to add pleasant scents to the air. Popular sauna scents include eucalyptus,
                         lavender, and citrus, which can promote relaxation and enhance the overall atmosphere.

                    </p>
                
                </div>
            </div>
            <div id='about'>

                <div className='about-text' data-aos="fade-right" data-aos-duration="1500">
                <img src={aboutimage2} alt="Video Thumbnail" width="520" height="540" id='mobimg' />

                    <h1>CHROMOTHERAPY</h1>
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

export default Feature3