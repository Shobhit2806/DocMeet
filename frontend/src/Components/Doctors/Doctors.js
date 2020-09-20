import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../landing-page/navbar'
import DoctorCard from '../Doctors/DoctorCard'
import './doctors.css'

export default class Doctors extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          props:[]
    //     }
        
    // }
    // async componentDidMount(){
    //     const response = await axios.get("http://localhost:3000/api/clinics");
    //     console.log(response);      
    // }
    
    render() {
     
        return (
            <div className="doctorslanding">
                <Navbar />
                <div className="textbook">Book an appointment for an in-clinic consultation </div>
                <br/>
                <DoctorCard />
                
                <DoctorCard />
                
                <DoctorCard />
            </div>
        )
    }
}
