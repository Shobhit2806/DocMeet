import React from 'react'
import imageslider1 from '../../assets/images/imageslider1.svg'
import './imageslider.css'
export default function imageslider() {
    return (
        <div className="imageslidermain">
            <div className="slidertext">WHERE DOCTORS AND PATIENTS MEET <br/><br/> Need Doctor?  Need Patient?</div>
             
            <img  className = "imageslider1" src = {imageslider1} alt="slider" />
        </div>
    )
}
