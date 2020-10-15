import React,{useEffect,useState} from 'react'
import Navbar from '../landing-page/navbar'
import {Button } from 'react-bootstrap';
import axios from 'axios';

export default function DoctorDashboard(props) {

    const [data, setData] = useState({ details: [] });

    useEffect(()=>{
        async function fetchData() {
            const emailId = props.match.params.emailId;
            // You can await here
            const response = await axios.get(`/api/clinics/details/${emailId}`);
            //console.log(response.data[0]);
            setData(response.data[0]);
        }
        fetchData();
    },[])    
    //console.log(props)
    //console.log(props.match.params.emailId)
    return (
        <div>
        {console.log(data)}
         <Navbar />
        {data.emailId}
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
