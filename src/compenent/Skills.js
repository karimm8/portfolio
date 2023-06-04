import React from 'react';
import img from '../skills.png';
import './Skills.css';
import 'animate.css';
import ProgressBar from "@ramonak/react-progress-bar";
export default function Skills() {
  const mainDiv = {
    width: "600px",
 };
  return (
    <div className='skills'>
       <h2>My Skills</h2>
         <div style = {mainDiv} className='progress'>
                <span>HTML</span>
                <ProgressBar completed = {90}  bgColor = "#27AE60" animateOnRender = {true} />
                <br></br>
                <span>CSS</span>
                <ProgressBar completed = {90} bgColor = "#27AE60" animateOnRender = {true} />
                <br></br>
                <span>JS</span>
                <ProgressBar completed = {70} bgColor = "#27AE60" animateOnRender = {true} />
                <br></br>
                <span>REACT JS</span>
                <ProgressBar completed = {70} bgColor = "#27AE60" animateOnRender = {true} />
         </div>
         <img src={img} alt='img' width={550} height={450} />
    </div>
  )
}
