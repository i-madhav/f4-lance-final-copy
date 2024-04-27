import React from 'react'
import { NavLink } from 'react-router-dom'

function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt="" />
        </div>
        <div className='a-b-text'>
            <h2><NavLink to="/feature1">{props.title}</NavLink></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicino tempore.</p>

        </div>
    </div>
  )
}

export default FeatureBox