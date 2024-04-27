import React from 'react'
// import {NavLink} from "react-router-dom"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
function Footer2() {
  return (
    <footer class="site-footer">
      <div class="container containerfooter">
        <div class="row">
          <div class="col-sm-12 col-md-6 footerCl">
            <h6>About</h6>
            <p class=""><span>Address:</span> 3rd Floor Dharma Palace,
              Sector-18, Noida
            </p>
            <p class=""><span>Contact:</span> +91 8287715938 , 9289192463
            </p>
          </div>

          <div className=' flex justify-evenly items-center'>
            <div class="col-xs-6 col-md-3">

              <ul class="footer-links">
                <h6 className=' underline'>Features</h6>
                <li><a href="/feature1">WORKOUT</a></li>
                <li><a href="/feature2">ZUMBA</a></li>
                <li><a href="/feature3">SAUNA</a></li>
                <li><a href="/feature4">YOGA</a></li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">

              <ul class="footer-links">
                <h6 className=' underline'>Links</h6>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className="container container2">
        <div class="row2">
          <div class="col-md-8 col-sm-6 col-xs-12 mt-2 flex ">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
              <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div className='icon mt-2'>
            <a href='/'>
              < FaFacebookSquare />
            </a>
            <a href='/'>
              <FaInstagramSquare />
            </a>
            <a href='/'>
              <FaTwitterSquare />
            </a>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer2