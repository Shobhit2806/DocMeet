import React,{useState} from 'react'
import dietician from '../../assets/images/dietician.jpg'
import './doctorcard.css'
import {Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'



function DoctorCard({doctor}) {
  
    console.log(doctor);
    return (
        <div classNameName="doctorcard">
     
        <div className="card mb-3" >
        <div className="row no-gutters">
        
        <div className="col-md-3">
            <img src={dietician} className=" profileimg card-img" alt="..." />
        </div>

          <div className="col-md-3">
            <div className="card-body">
              <h5 className="card-title">{doctor.clinicName}</h5>
    <p className="card-text">{doctor.doctorName}</p>
              <p className="card-text"><small className="text-muted">{doctor.specializations}</small></p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-body">
              <h5 className="card-text"> {doctor.streetline1}</h5>
              <p className="card-text">{doctor.fees}</p>
              <p className="card-text">{doctor.helpline1}</p>
              <p className="card-text">{doctor.fromDay}-{doctor.toDay} <br/>10:00 AM-6:00 PM </p>
              
              
             
            </div>
            
          </div>

          <div className="col-md-3">
            <div className="card-body">
                <br/><br/><br/>
            {doctor.availability=='true'?
           <Link to={{
             pathname:'/scheduleappointment',
             state:{
              emailId:doctor.emailId
             }
           }}><Button variant="primary">Book An Appointment</Button></Link>
           :<div className="over-blur" >Not available</div>
             }
            
            
            </div>
            
          </div>

          

        </div>
        </div>
   
         </div>
 

    )
}

export default DoctorCard
