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
            const token = localStorage.getItem('token')
            const config = {
                headers:{
                    "Content-type":"application/json"
                    
                }
            }
            if(token){
                config.headers['x-auth-token'] = token;
            }
            
            // You can await here
            const response =await axios.get(`/api/clinics/details/${emailId}`)
            setDoctor(response.data[0])
            
           
            const appointments = await axios.get(`/api/appointmenttimes/${emailId}`,config);
            console.log(appointments)
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
        <br/>
        <Button>Stop Booking</Button>
        {console.log(typeof(infos))}
        {console.log(infos)}

        {
            infos.map(info => <BookingCard info={info}/>)
        } 
            
         
        



</div>    
        
    )
}
