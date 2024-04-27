import React, { useState } from 'react'
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'


const w ={
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}


const chooseaplan ={
    marginTop:"160px",
    marginLeft:"10px",
}

const width = {
    width: '600px',
    height: '50px',
    marginTop: '10px',
    marginBottom: '10px',
    background:'#2d2d2d',
    color:'#929192',
    borderRadius: '5px',
}


function PriceContenct() {
    let navigate = useNavigate()
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [plan, setPlan] = useState("");

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:4000/api/v1/pricebook/price",
                { name, phone, email, address, plan },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            console.log(data);

            toast.success("congratulation your sloted booked successfully!!!");
            setName("");
            setPhone("");
            setEmail("");
            setAddress("");
            setPlan("");
            navigate('/home')

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
    return (
        <div id='contact2' >
            <h1 data-aos="zoom-in" data-aos-duration="1500"  style={w}>Price Update</h1>
            <form data-aos="fade-up" data-aos-duration="1500" >
                <input type="text" placeholder='Enter your name' id='firstName'
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
                <input type="text" placeholder='Enter your Number  ' id='phone'
                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder='Your Email ' id='email' value={email} onChange={(e) =>
                    setEmail(e.target.value)
                } />
                <label for="price-contact" ></label>

                <select id="price-contact"  value={plan} style={width} onChange={(e) =>
                    setPlan(e.target.value)} >
                <option value="chooseplan">Choose a plan:</option>
                    <option value="STANDARD-GYM+GX">STANDARD-GYM+GX</option>
                    <option value="PREMIUM-GYM+PT">PREMIUM-GYM+PT</option>
                    <option value="NUTRITION-PLANl">NUTRITION-PLAN</option>
                    <option value="KNOCKOUT-FIGHTCLUB">KNOCKOUT-FIGHTCLUB</option>
                </select>
                <textarea name="address" placeholder='Enter Address.....' id="" cols="30" rows="10"
                    value={address} onChange={(e) => setAddress(e.target.value)}
                ></textarea>
                <input type="submit" className='price-contactbutton' value="Send Now" onClick={handleReservation} />

            </form>

        </div>
    )
}

export default PriceContenct;