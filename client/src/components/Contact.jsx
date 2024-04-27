import React, { useState } from 'react'
import ReactWhatsapp from 'react-whatsapp';
import axios from "axios"
import { toast } from "react-toastify"
import { FaWhatsapp } from "react-icons/fa";

const k = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/contact/send",
        { name, email, subject, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);

      toast.success("contact sent");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("")

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div id='contact' >

      <div className='contact-image'>
        <iframe className='googlemaps' data-aos="zoom-in" data-aos-duration="1500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9291229867326!2d77.31986607478436!3d28.57189097569797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44f14da8c4f%3A0xa9512c3004c8cb4d!2sLa%20Fitnesse%20Select!5e0!3m2!1sen!2sin!4v1711611655537!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }} // Correct usage of style attribute
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='contact-div'>
        <div id="about-image">
        </div>
        <form data-aos="fade-up" data-aos-duration="1500" >
          <input type="text" placeholder='Enter your name' id='firstName'
            value={name}
            onChange={(e) => setName(e.target.value)} className='contact-input' />
          <input type="email" placeholder='Type your email' id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Enter your subject ' id='phone' value={subject}
            onChange={(e) => setSubject(e.target.value)} className='contact-input' />
          <textarea name="textArea" placeholder='Write Here.....' id="" cols="30" rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
          <input type="submit" value="Send" className='contactbtn' onClick={handleReservation} />


        </form>
        <button className='whatsapp'><ReactWhatsapp className='appname' number="+91 8684894051" message="For Inquire ">
          <FaWhatsapp className='w-logo' /><span> help?</span></ReactWhatsapp></button>

      </div>
    </div>
  )
}

export default Contact;