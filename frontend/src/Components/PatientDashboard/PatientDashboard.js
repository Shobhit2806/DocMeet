import React from 'react'
import Navbar from '../landing-page/navbar'
import {Button } from 'react-bootstrap';


export default function PatientDashboard() {
    return (
        <div>
            <Navbar />

            <div classNameName="patientcard">
     
     <div className="card mb-3" >
     <div className="row no-gutters">
     
     
       <div className="col-md-3">
         <div className="card-body">
           <h5 className="card-title">Clinic Name</h5>
           <p className="card-text">HelpLine Number</p>
           
         </div>
       </div>

       <div className="col-md-6">
         <div className="card-body">
           Booking Number:
           Current Booking Number:
           
          
         </div>
         
       </div>


       

     </div>
     </div>

      </div>

            <Button variant="primary">Reschedule Appointment</Button>
            <br/><br/><br/>
            <Button variant="primary">Cancel Appointment</Button>
        </div>
    )
}
