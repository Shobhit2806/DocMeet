import React from 'react'
import Navbar from '../landing-page/navbar'
import image from '../../assets/images/img1.svg'
import {Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
// import './patientdetails.css'

export default function PatientDetails() {
    return (
        <div className="patientdetailmain">
            {/* <Navbar /> */}
        <div className="page">
            <div className="inputfields">
            <div className="username">UserName:<input type="text" placeholder="username"/></div> 
            
            <div className="phonenumber">PhoneNumber:<input type="text" placeholder="phone number"/></div>
            <div className="btnsub"><Link to="/scheduleappointment"><Button variant="primary">Schedule An Appointment</Button></Link></div>
            </div>
            {/* <img className="img_pat" src={image} /> */}
            </div>
        </div>
    )
}
