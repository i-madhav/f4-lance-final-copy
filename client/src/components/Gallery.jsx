/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import aboutimage from "../images/fitness1.jpg"
import aboutimage2 from "../images/fitness2.jpg"
import aboutimage3 from "../images/fitness 3.jpg"
import patten from "../images/fitness 3.jpg"
import aboutimage4 from "../images/fitness 4.jpg"
import aboutimage5 from "../images/fitness 5.jpg"
import aboutimage6 from "../images/fitness 6.jpg"
import aboutimage7 from "../images/fitness 9.jpg"
import aboutimage8 from "../images/fitness 7.jpg"
import aboutimage9 from "../images/fitness 8.jpg"
import aboutimage10 from "../images/fitness 10.jpg"
import cardio1 from "../images/fitness1.jpg"
import { GalleryData } from './GalleryData'
import { useEffect, useState } from 'react'
import w1 from "../images/fitness1.jpg"
import w2 from "../images/fitness2.jpg"
import w3 from "../images/fitness 3.jpg"
import w4 from "../images/fitness 4.jpg"
const bannerImg = {
    // backgroundImage: `URL(${patten})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "80%",
    width: "100vw",

}
const bannerh1 = {
    fontSize: "4rem",


}
const bannerh2 = {
    fontSize: "5rem",


    color: "white"

}
const textContainer = {
    textAlign: "center"
}


function Gallery() {
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setData(GalleryData)
        setCollection([... new Set(GalleryData.map((item)=> item.title))])
        console.log(GalleryData);
        console.log(data);
      
        
    }, [])
    const gallery_filter = (itemData)=>{
        const filterData = GalleryData.filter((item)=> item.title == itemData);
        setData(filterData)
        console.log(filterData);



    }
   
   
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
                            <div className='feature-text'><h1>GALLERY</h1></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className= "container5 ">
                <ul className='list'>
                    <li><button className='featurebutton' onClick={()=>setData(GalleryData)}>All</button></li>
                    {
                        collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}} className='featurebutton'>{item}</button></li>)
                    }
                </ul>
            </div>
            <div  className='gallery'>
                <div className='gallerycard'>
                    {
                        data.map((item) => <div className='card'> <img key={item.id} src={w1} /> </div>)
                       
                       
                    }
                    {
                         
                    }
                </div>


            </div>

        </>

    )
}

export default Gallery