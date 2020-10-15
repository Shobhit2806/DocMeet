import React from 'react'
import Navbar from '../landing-page/navbar'
import {Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

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

           <Link to="/scheduleappointment"><Button variant="primary">Reschedule Appointment</Button></Link> 
            <br/><br/><br/>
            <Button variant="primary">Cancel Appointment</Button>
        </div>
    )
}
