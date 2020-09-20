import React from 'react'
import dietician from '../../assets/images/dietician.jpg'
import './doctorcard.css'
import {Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'



function DoctorCard() {
    
    return (
        <div classNameName="doctorcard">
     
        <div className="card mb-3" >
        <div className="row no-gutters">
        
        <div className="col-md-3">
            <img src={dietician} className=" profileimg card-img" alt="..." />
        </div>

          <div className="col-md-3">
            <div className="card-body">
              <h5 className="card-title">Clinic Name</h5>
              <p className="card-text">Dr.Tony Start</p>
              <p className="card-text"><small className="text-muted">Dermatolgist,Dentist</small></p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-body">
              <h5 className="card-text"> Local Streel 1,Delhi</h5>
              <p className="card-text">Fess:500</p>
              <p className="card-text">Helpline Number:1234567892</p>
              <p className="card-text">Mon-Sat <br/>10:00 AM-6:00 PM </p>
              
              
             
            </div>
            
          </div>

          <div className="col-md-3">
            <div className="card-body">
                <br/><br/><br/>
           <Link to="/patientdetails"><Button variant="primary">Book An Appointment</Button></Link> 
            {/* <p className="card-text">No Booking Fee</p> */}
            
            </div>
            
          </div>

          

        </div>
        </div>
   
         </div>
 

    )
}

export default DoctorCard
