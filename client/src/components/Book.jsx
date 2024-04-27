import React , {useState} from 'react'
import axios from "axios"
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom'



function Book() {
  let navigate = useNavigate()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/book/booknow",
        { name, phone, age , address },
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
      setAge("");
      setAddress("")
      navigate('/home')
     
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div id='contact2' >
    <h1  data-aos="zoom-in" data-aos-duration="1500">BOOK NOW</h1>
    <form data-aos="fade-up" data-aos-duration="1500" >
        <input type="text" placeholder='Enter your name' id='firstName' 
        value={name}
        onChange={(e) => setName(e.target.value)} 
        
         />
        <input type="text" placeholder='Enter your Number  ' id='phone' 
        value={phone} onChange={(e)=> setPhone(e.target.value)} />
        <input type="age" placeholder='Enter Your age  ' id='age' value={age} onChange={(e)=>
          setAge(e.target.value)
        }  />
        <textarea name="address" placeholder='Enter Address.....' id="" cols="30" rows="10" 
         value={address} onChange={(e)=> setAddress(e.target.value)}
        ></textarea>
        <input type="submit" value="Book Now" onClick={handleReservation} />

    </form>

</div>
  )
}

export default Book