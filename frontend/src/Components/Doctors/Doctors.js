import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../landing-page/navbar'
import DoctorCard from '../Doctors/DoctorCard'
import './doctors.css'

export default class Doctors extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             doctors:[]
        }
        
    }
    async componentDidMount(){
        const speciality = this.props.match.params.speciality;
        console.log(this.props.match.params.speciality);
        const response = await axios.get(`api/clinics/${speciality}`);
        this.setState({doctors:response.data})
        console.log(response.data);      
    }
    
    render() {
        const {doctors} = this.state
        return (
            <div className="doctorslanding">
                <Navbar />
                <div className="textbook">Book an appointment for an in-clinic consultation </div>
                <br/>
                {
                    doctors.length?doctors.map(doctor => <DoctorCard doctor={doctor}/>):null
                }
                
            </div>
        )
    }
}
