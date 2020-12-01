import React from 'react'
import imageslider1 from '../../assets/images/imageslider1.svg'
import './imageslider.css'
export default function imageslider() {
    return (
        <div className="imageslidermain">
            <div data-aos="fade-right" data-aos-duration="2000" className="slidertext">WHERE DOCTORS AND PATIENTS MEET <br/> Need Doctor?  Need Patient? </div>
            {/* <div data-aos="fade-right" data-aos-duration="2000" className="slidertext"> Need Doctor?  Need Patient?</div> */}
             
            <img data-aos="zoom-in-up" data-aos-duration="3000" className = "imageslider1" src = {imageslider1} alt="slider" />
        </div>
    )
}
