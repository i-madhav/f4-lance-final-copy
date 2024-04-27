import React, { useState, useEffect, useContext } from 'react';
import Navbar from "../components/Navbar";
// import { Link } from 'react-scroll';
import video from "../images/headervedio2.mp4";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../App';

const Header = () => {

    const [userName, setUserName] = useState('');
    const { islogin , setIslogin} = useContext(UserContext)
    const navigate = useNavigate();


    const userHomePage = async () => {
        try {
            const res = await fetch('http://localhost:4000/api/v1/user/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
            });

            const data = await res.json();
            console.log(data);
            setUserName(data.name);
            console.log(userName);

        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        userHomePage();
    }, []);

    const handleJoinUsClick = ()=>{
        if(islogin){
            navigate("/pricing")
        } else{
            toast.error("User is not Logged In");
          
        }
    }


    const width ={
        width:"100%",
    }

    

    return (
        <>
            <Navbar />
            <div  id='main'>
                <div className='overlay'>
                    <video src={video} autoPlay loop muted />
                </div>
                <div className='name'>
                {userName && <h2><span>{userName}</span> STEP UP YOUR</h2>}
                    <h2><span>{userName}</span> STEP UP YOUR</h2>
                    <h1 className='fitnessh2'><span>FITNESS</span>WITH US</h1>
                    <p className='details'>Build Your Body And Fitness With Professional</p>
                    <div className='header-btns'>
                        <button onClick={handleJoinUsClick} className='header-btn'>JOIN US</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
