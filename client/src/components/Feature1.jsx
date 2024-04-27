import React from 'react'
import aboutimage from "../images/workout.jpg"
import aboutimage2 from "../images/workoutplan.jpg"

import w1 from "../images/fitness1.jpg"
import w2 from "../images/fitness 6.jpg"
import w3 from "../images/fitness 5.jpg"
import w4 from "../images/fitness 4.jpg"
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
const bannerh2 = {
    fontSize: "4rem",
    color: "black"
}

function Feature1() {
    return (
        <>
            <div className='flex items-center justify-center testimonal featuresss text-center'>
                <div className='container testimonal text-white '>
                    <div
                        className='sm:min-h-[400px] sm:flex sm:justify-end 
              sm:items-center rounded-xl  featureImage '>
                        <div className='feature1-box1'><img src={w1} /></div>
                        <div className='feature1-box1'><img src={w2} /></div>
                        <div className='feature1-box1'><img src={w3} /></div>
                        <div className='feature1-box1'><img src={w4} /></div>
                        <div className='black'></div>


                        <div className='feature-div'>
                            <div className='feature-text'><h1>WORKOUT</h1></div>
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

                    <h1>Personal  Training Session</h1>
                    <p>Whether you want increased energy or reduced stress,
                        cardio training (otherwise known as cardiovascular or CV training)
                        helps you live a fitter life while strengthening your heart and lungs.
                        From interval workouts to endurance exercises,
                        cardio training can also help to lower blood pressure and cholesterol levels.
                    </p>

                </div>

                <div className='about-text' data-aos="fade-right" data-aos-duration="1500">
                    <img src={aboutimage2} alt="Video Thumbnail" width="520" height="540" id='mobimg' />

                    <h1>Personalized Workout Plans</h1>
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

export default Feature1