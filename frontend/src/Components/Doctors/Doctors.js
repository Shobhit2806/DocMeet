import React, { Component } from 'react'
import axios from 'axios';
export default class Doctors extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             props:[]
        }
        
    }
    async componentDidMount(){
        const response = await axios.get("http://localhost:3000/api/clinics");
        console.log(response);      
    }
    
    render() {
        return (
            <div>
                <h1>All clinics appear here</h1>
            </div>
        )
    }
}
