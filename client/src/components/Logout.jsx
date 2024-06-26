import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {UserContext} from "../App";
import { toast } from 'react-toastify';


const Logout = () => {
    // promises 
    const { islogin , setIslogin} = useContext(UserContext);
    const { state, dispatch } = useContext(UserContext);
    let navigate = useNavigate()

        
    useEffect(() => {
        fetch('http://localhost:4000/api/v1/user/logout', {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            // dispatch({ type: 'USER', payload: false });
            setIslogin(false);
            localStorage.setItem("islogin" , islogin);
            navigate('/login')
            toast.success("logout successfully!!!")
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return (
        <>
           <h1>Logout ka page</h1> 
        </>
    )
}

export default Logout
