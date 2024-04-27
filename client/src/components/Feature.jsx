import React from 'react'
import FeatureBox from './FeatureBox'
import fimage1 from "../images/fitness1.jpg"
import fimage2 from "../images/fitness 10.jpg"
import fimage3 from "../images/fitness 3.jpg"
import fimage4 from "../images/fitness 4.jpg"
import fimage5 from "../images/fitness 5.jpg"
import fimage6 from "../images/fitness 6.jpg"
import fimage7 from "../images/fitness 7.jpg"
import fimage8 from "../images/fitness 8.jpg"

function Feature() {
  return (
    <div id='features'>
        <h1 data-aos="zoom-in" data-aos-duration="1500">FEATURES</h1>
        <div className='a-container' data-aos="zoom-in" data-aos-duration="1500">
            <FeatureBox image={fimage1} title="Weight Lifting" para={"ccncejhcechfcfhncjncjcnjecnjecnjecncejn"} />
            <FeatureBox image={fimage2} title="Zumba" para={"ccncejhcechfcfhncjncjcnjecnjecnjecncejn"} />
            <FeatureBox image={fimage3} title="Typer & Rope " para={"ccncejhcechfcfhncjncjcnjecnjecnjecncejn"} />
            <FeatureBox image={fimage4} title="Weight Lifting" para={"ccncejhcechfcfhncjncjcnjecnjecnjecncejn"} />
            <FeatureBox image={fimage5} title="Cardio Exercise" para={"ccncejhcechfcfhncjncjcnjecnjecnjecncejn"} />
            <FeatureBox image={fimage6} title="Weight Lifting" para={"ccncejhcechfcfhncjncjcnjecnjecnjecncejn"} />
            <FeatureBox image={fimage7} title="Tyer& Rope" para={"ccncejhcechfcfhncjncjcnjecnjecnjecncejn"} />
            <FeatureBox image={fimage8} title="Weight Lifting" para={"ccncejhcechfcfhncjncjcnjecnjecnjecncejn"} />


        </div>

    </div>
  )
}

export default Feature