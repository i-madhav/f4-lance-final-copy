import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
// import signpic from "../images/signup.svg";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"

import video from "../images/video (2160p).mp4"
function Register() {
  let navigate = useNavigate()
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }


  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    if (phone.length != 10) {
      toast.error("Phone number must be 10 digit long");
      return;
    }

    const res = await fetch("http://localhost:4000/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    const data = await res.json();
    console.log(data);
    console.log(data.message);

    // I need to change the data to res 

    if (data.message === "User already exsists" || !data) {
      toast.error("Email already registered");
      console.log("Email already registered");

    } else {
      toast.success("Registration Successful!!");
      navigate('/login');

    }
    // if (data.status === 400) {
    //   if (data.message === "User already exsists") {

    //     return;
    //   }
    // } else if (!data) {
    //   toast.success("Invalid Registration!!");
    //   console.log("Invalid Registration!!");
    //   return;
    // } else {

    // }

  }


  return (
    <>
      <section className='signup' id='register'>
        <video className='background-video2' src={video} autoPlay loop muted />
        <div className='container mt-5'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title form-title3' data-aos="zoom-in" data-aos-duration="1500">SIGN UP</h2>
              <form method='POST' onSubmit={PostData} className='register-form' id='register-form' data-aos="fade-up" data-aos-duration="1500">

                <div className='form-group form-group-2'>
                  <label htmlFor="name">
                    <i className='zmdi zmdi-account material-icons-name' id='icons'></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete='off'
                    placeholder='Enter your name ' value={user.name}
                    onChange={handleInputs} />
                </div>
                <div className='form-group form-group-2'>
                  <label htmlFor="email">
                    <i className='zmdi zmdi-email material-icons-name' id='icons' ></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete='off'
                    placeholder='Enter your email ' value={user.email}
                    onChange={handleInputs} />
                </div>
                <div className='form-group form-group-2'>
                  <label htmlFor="phone">
                    <i className='zmdi zmdi-phone-in-talk material-icons-name  ' id='icons'></i>
                  </label>
                  <input type="number" name="phone" id="phone" autoComplete='off'
                    placeholder='Enter your phone no ' value={user.phone}
                    onChange={handleInputs} />
                </div>
                <div className='form-group form-group-2'>
                  <label htmlFor="work">
                    <i className='zmdi zmdi-slideshow' id='icons'></i>
                  </label>
                  <input type="text" name="work" id="work" autoComplete='off'
                    placeholder='Enter your work' value={user.work}
                    onChange={handleInputs} />
                </div>
                <div className='form-group form-group-2'>
                  <label htmlFor="password">
                    <i className='zmdi zmdi-lock material-icons-name' id='icons'></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete='off'
                    placeholder='Enter your password' value={user.password}
                    onChange={handleInputs} />
                </div>
                <div className='form-group form-group-2'>
                  <label htmlFor="cpassword">
                    <i className='zmdi zmdi-lock material-icons-name' id='icons'></i>
                  </label>
                  <input type="password" name="cpassword" id="cpassword" autoComplete='off'
                    placeholder='Enter your confirm password' value={user.cpassword}
                    onChange={handleInputs} />
                </div>

                <div className='form-group form-button' id='register-button'>
                  <NavLink to="/login" className="signup-image-link link-3">I am already register </NavLink>
                  <input type="submit" name="register" id='register' className='form-submit form-submit-3'

                    value="register" />
                </div>


              </form>
            </div>



          </div>
        </div>

      </section>
    </>
  )
}

export default Register