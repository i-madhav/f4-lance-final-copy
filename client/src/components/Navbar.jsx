import React, { useContext, useState } from 'react'
import logo from "../images/lafitness.png"
import hamburger from '../images/Hamburger.png';
import { NavLink } from "react-router-dom"
import { UserContext } from "../App"

// import { MdArrowDropDown } from "react-icons/md";


const i ={
    backgroundColor:"transparent",
    outline:"none",
    borderColor:"transparent",
}

function Navbar() {
    const { state, dispatch } = useContext(UserContext);
    const {islogin , setIslogin} = useContext(UserContext);
    const RenderMenu = () => {
        if (islogin) {
            return (
                <>
                    <li><NavLink to='/home' smooth={true} duration={1000}>HOME </NavLink> </li>
                    <li><NavLink to='/pricing' smooth={true} duration={1000}>MEMBERSHIP</NavLink> </li>
                    <li><NavLink to='/about2' >ABOUT</NavLink> </li>
                    <li><NavLink to='/contact' smooth={true} duration={1000}>CONTACT</NavLink> </li>
                    <li><NavLink to='#' className="dropdownmain">Features</NavLink>
                        <ul class="dropdown">
                            <li><NavLink to="/feature1">Workout</NavLink></li>
                            <li><NavLink to="feature2">Zumba</NavLink></li>
                            <li><NavLink to="feature3">Sauna</NavLink></li>
                            <li><NavLink to="feature4">YOGA</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/gallery">GALLERY</NavLink></li>



                    <li><NavLink to='/logout' smooth={true} duration={1000}>LOGOUT</NavLink> </li>

                </>
                
            )
        } else {
            return (
                <>
                
              <li><NavLink to='/home' smooth={true} duration={1000}>HOME</NavLink> </li>
                    <li><NavLink to='/about2' smooth={true} duration={1000}>ABOUT</NavLink> </li>
                    <li><NavLink to='#' className="dropdownmain">Features </NavLink>
                        <ul class="dropdown">
                            <li><NavLink to="/feature1">Workout</NavLink></li>
                            <li><NavLink to="feature2">Zumba</NavLink></li>
                            <li><NavLink to="feature3">Sauna</NavLink></li>
                            <li><NavLink to="feature4">YOGA</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/gallery">GALLERY</NavLink></li>

                    <li><NavLink to='/contact' smooth={true} duration={1000}>CONTACT</NavLink> </li>
                    <li><NavLink to='/login' smooth={true} duration={1000}>LOGIN</NavLink> </li>
                    <li><NavLink to='/register' smooth={true} duration={1000}>REGISTER</NavLink> </li>

                </>
            )
        }

    }
    const [nav, setnav] = useState(false);
    const changebackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false)
        }
    }


    return (
        <>
        {/* <div  className='footer-top'>ayush ayush ayush</div> */}
    
 
            <nav className={nav ? "nav active" : "nav"} >

                <NavLink to='main' smooth={true} duration={2000} className='logo'>
                    <img src= {logo} alt=""  height="1500px" width="1500px" />
                </NavLink>
                <input type="checkbox" className='menu-btn' id='menu-btn' style={i}/>
                <label className='menu-icon' for="menu-btn">
                    <span className='nav-icon'> </span>
                </label>
                <ul className='menu'>

                    <RenderMenu />


 



                </ul>

            </nav>
        </>

    )
}

export default Navbar