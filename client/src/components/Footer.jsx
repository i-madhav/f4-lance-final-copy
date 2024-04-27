import React from 'react'
import logo from "../images/logo.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer' id='footer2'>
        <div className='top'>
            <div>
                <h1><img src={logo} alt="" /></h1>
                <p>Chooe your favourite destination.</p>
            </div>
            <div className='icon'>
                <a href='/'>
                    <FaFacebookSquare/>
                </a>
                <a href='/'>
                   <FaInstagramSquare/>
                </a>
                <a href='/'>
                    <FaTwitterSquare/>
                </a>

            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>workout</h4>
                <a href="/">PUSH</a>
               
                
            </div>
            <div>
                <h4>Projects</h4>
                <a href="/">Changelog</a>
               
              
            </div>
            <div>
                <h4>WEBSITE</h4>
                
                <a href="/">gym@gmail.com</a>
              
            </div>
        </div>

    </div>
  )
}

export default Footer