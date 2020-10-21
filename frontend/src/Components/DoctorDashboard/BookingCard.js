import React from 'react'
import dietician from '../../assets/images/dietician.jpg'

import {Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import axios from 'axios';


function BookingCard({info}) {
    console.log(info);

    const handleDone= async booking =>{
      const Id = info._id;
      await axios.delete(`/api/appointmenttimes/${Id}`)
    }



    return (
        <div classNameName="infocard">
     
        <div className="card mb-3" >
        <div className="row no-gutters">
        
        <div className="col-md-3">
            <img src={dietician} className=" profileimg card-img" alt="..." />
        </div>

          <div className="col-md-3">
            <div className="card-body">
              <h5 className="card-title">{info.patientName}</h5>
    <p className="card-text">{info.date}</p>
              <p className="card-text"><small className="text-muted">{info.time}</small></p>
            </div>
          </div>

          
          {/* <div className="col-md-3">
            <div className="card-body">
              <h5 className="card-text"> {info.streetline1}</h5>
              <p className="card-text">{info.fees}</p>
              <p className="card-text">{info.helpline1}</p>
              <p className="card-text">{info.fromDay}-{info.toDay} <br/>10:00 AM-6:00 PM </p>
              
              
             
            </div>
            
          </div> */}

          <div className="col-md-3">
            <div className="card-body">
                <br/><br/><br/>
          <Button onClick={handleDone} variant="primary">Done</Button>
            
            
            </div>
            
          </div>

          

        </div>
        </div>
   
         </div>
 

    )
}

export default BookingCard;
