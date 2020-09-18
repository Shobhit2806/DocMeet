import React from 'react'
import './landingfeature.css'
import findadoctor from '../../assets/images/findadoctor.svg'
import viewprofile from '../../assets/images/viewprofile.svg'
import bookavisit from '../../assets/images/bookavisit.svg'
import {Link} from 'react-router-dom'


export default function landingfeatures() {
    return (
        <div>
            <div className="discover">Discover the Online Appointment!</div>
            <br/>
            <div className="featurebox">
            <div className="box1">
           <Link to="/doctors"><img  className = "findimg" src = {findadoctor} alt="find" /></Link>
                <h1 className="findtext">FIND A DOCTOR!</h1>
                
            </div>
            <div className="box2">
            <img  className = "findimg1" src = {viewprofile} alt="view" />
            <h1 className="findtext">VIEW PROFILE!</h1>
            
            </div>
            <div className="box3">
            <img  className = "findimg" src = {bookavisit} alt="book" />
            <div className="findtext">BOOK A VISIT!</div>
            </div>
            </div>
        </div>
    )
}
