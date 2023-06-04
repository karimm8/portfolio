import React from 'react';
import './Contact.css'
import {FaGithub,FaLinkedinIn,FaEnvelope,FaPhoneAlt} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
export default function Contact() {
  return (
    <div className='contact'>
          <h2>My Contact</h2>
          <div>
          <IconContext.Provider value={{ color: "#915eff", className: "icon" }}>
          <FaGithub size={50} style={{color:"#27AE60"}} />
          </IconContext.Provider>
             <Link to ="https://github.com/karimm8" >karim corder</Link>
          </div>
          <div>
          <FaLinkedinIn className='icon' size={50} style={{color:"#27AE60"}} />
          <Link to ="https://www.linkedin.com/in/maarouf-abdelkarim-99117b278/">maarouf abdelkarim</Link>
          </div>
          <div>
          <FaEnvelope className='icon' size={50} style={{color:"#27AE60"}} />
          <Link to ="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" >maaroufabdelkarim7</Link>
          </div>
          <div>
            <FaPhoneAlt className='icon' size={50} style={{color:"#27AE60"}} />   
            <Link to ="https://web.whatsapp.com/" >0676703436</Link>
          </div>
    </div>
  )
}
