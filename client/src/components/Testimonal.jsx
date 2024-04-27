import React from 'react'
import Appstore from "../images/app_store.png"
import Playstore from "../images/play_store.png"
import patten from "../images/testimonal4.jpg"


const bannerImg = {
    backgroundImage: `URL(${patten})`,
  
}

const text = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
}

const text1 = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
}

const icon = {
    marginLeft: "-15vh",
    width: "130px",
}

function Testimonal() {
    return (
        <div className='flex items-center justify-center testimonal m-b-3'>
            <div className='container testimonal text-white'>
                <div className='textContainer downloadC' style={bannerImg}>
                    <div className='innertextcontainer'>
                        <div className='max-w-xl mx-auto space-y-6  '>
                            <h1 className='text-2l text-center sm:text-4xl font-semibold bannerh1' style={text}>DOWNLOARD THE APP</h1>
                            <p className='text-center sm:px-20 bannerp'>Lorem ipsum dolor sit, amet consectetur
                                adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elir fuga suscipit quibusdam magnam? Reprehenderit ipsam nam exercitationem.\

                            </p>1
                            <div className=' iconCss' style={text}>
                                <div id="icons" style={text}>
                                    <div id="icon"> <a href="#">
                                        <img src={Appstore}
                                            className='max-w-[130px] sm:max-w-[120px] md:max-w-[200px]' alt="" id='iconofappstoreandplaystore' />
                                    </a></div>
                                </div>
                                <div id="icon" style={icon}>
                                    <a href="#">
                                        <img src={Playstore}
                                            className='max-w-[130px] sm:max-w-[120px] md:max-w-[200px]' alt="" id='iconofappstoreandplaystore' />
                                    </a></div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Testimonal