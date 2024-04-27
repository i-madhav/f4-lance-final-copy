import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../App"
// import login from "../images/login.svg"
import video from "../images/vedio5.mp4";
import {toast} from "react-toastify"
function Login() {

  const { state, dispatch } = useContext(UserContext)
  const { islogin , setIslogin} = useContext(UserContext)
  let navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[emailError , setEmailError] = useState('');

  useEffect(()=>{
    const storedUser = localStorage.getItem('user');
    if(storedUser){
      const {email , password }  = JSON.parse(storedUser);
      setEmail(email);
      setPassword(password);
    }
  },[]);

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(email)){
        setEmailError('Invalid email format');
        setTimeout(()=> {
          setEmailError('');
        }, 4000);
        return;
      }
      const res = await fetch('http://localhost:4000/api/v1/user/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const data = res.json();
      console.log(data);

      
    if (res.status === 400 || !data) {
      toast.error("Invalid Credentials");
     } else {
       const token = data.token;
       const expireIn = data.expireIn;
       document.cookie = `jwtoken=${token}; max-age=${expireIn}; path=/;`;
       document.cookie = `email=${email}; max-age=${expireIn}; path=/;`;
       localStorage.setItem('user', JSON.stringify({ email, password}));
       setIslogin(true);
       localStorage.setItem("islogin", islogin);
       toast.success("login successful!!!");
       navigate('/home');
     }
    } catch (error) {
      console.log("login error :", error);
      toast.error("Something went wrong")
      
    }





  }

  return (

    <>
        <section className='sign-in' id='login'>
            <video className='background-video' src={video} autoPlay loop muted />
          <div className='container container2 mt-5'>
            <div className='signin-content'>
            <div className='signin-form'>
                <h2 className='form-title form-title2'data-aos="zoom-in" data-aos-duration="1500">SIGN IN</h2>
                <form method='POST' className='register-form' id='register-form' data-aos="fade-up" data-aos-duration="1500">
                  <div className='form-group form-group-2'>
                    <label htmlFor="email">
                      <i className='zmdi zmdi-email material-icons-name' id='icons'></i>
                    </label>
                    <input  type="email" name="email" id="email" autoComplete='off'
                      placeholder='Enter your email ' value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className='form-group form-group-2'>
                    <label htmlFor="password">
                      <i className='zmdi zmdi-lock material-icons-name' id='icons'></i>
                    </label>
                    <input type="text" name="password" id="password" autoComplete='off'
                      placeholder='Enter your password  ' value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className='form-group form-button '>
                  <NavLink to="/register" className="signin-image-link link2">Create an Account </NavLink>
                    <input type="submit" name="signin" id='signin' className='form-submit form-submit2'

                      value="LOG IN" onClick={loginUser} />
                     
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </section>


      





        

      

    </>
  )
}

export default Login