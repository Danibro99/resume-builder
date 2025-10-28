import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";


function Footer() {
  return (
    <div style={{height:"300px",width:"100vw",backgroundColor:"yellowgreen"}} className='text-white d-flex flex-column justify-content-center align-items-center'>
        <h4>Contact Us</h4>
        <h5><CiMail /> Careercraft@gmail.com</h5>
        <h5><FaPhoneAlt /> 9633033031</h5>
        <h4>Connect With Us</h4>
        <div className='fs-2 d-flex gap-2'>
          <FaWhatsapp />
          <CiInstagram />
          <CiFacebook />
        </div>
        <p className='my-3'>Made using REACT</p>
    </div>
  )
}

export default Footer