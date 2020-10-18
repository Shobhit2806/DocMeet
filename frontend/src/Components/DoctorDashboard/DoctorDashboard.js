import React,{useEffect,useState} from 'react'
import Navbar from '../landing-page/navbar'
import {Button } from 'react-bootstrap';
import axios from 'axios';
import BookingCard from '../DoctorDashboard/BookingCard'
export default function DoctorDashboard(props) {

    const [doctor, setDoctor] = useState({ doctor: [] });
    const [infos, setInfos] = useState([]);

    useEffect(()=>{
            async function fetchData() {
            //console.log(props)
            const emailId = props.match.params.emailId;
            
            // You can await here
            const response =await axios.get(`/api/clinics/details/${emailId}`)
            setDoctor(response.data[0])
            
            //console.log("hi")
            //console.log(response)
            const appointments = await axios.get(`/api/appointmenttimes/${emailId}`);
            //console.log(appointments.data.length)
            //console.log(typeof(appointments))
            setInfos(appointments.data);
            }
            fetchData();
        },[])        
    //console.log(props.match.params.emailId)
    return (
        <div>
        {console.log(doctor)}
         <Navbar />
        {doctor.emailId}
        {console.log(typeof(infos))}
        {console.log(infos)}

         {
            infos.map(info => <BookingCard info={info}/>)
        } 
            
         
        
<div className="patientcard">

<div className="card mb-3" >
<div className="row no-gutters">


<div className="col-md-3">
<div className="card-body">
<h5 className="card-title">Patient's Name</h5>
<p className="card-text">Contact Number</p>

</div>
</div>

<div className="col-md-6">
<div className="card-body">
Booking Number:
Done:


</div>

</div>




</div>
</div>

</div>


</div>    
        
    )
}
