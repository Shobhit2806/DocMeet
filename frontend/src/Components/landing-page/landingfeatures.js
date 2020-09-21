import React from 'react'
import './landingfeature.css'
import findadoctor from '../../assets/images/findadoctor.svg'
import viewprofile from '../../assets/images/viewprofile.svg'
import bookavisit from '../../assets/images/bookavisit.svg'



export default function landingfeatures() {
    return (
        <div className="featuresmain">
            <div className="discover">Discover the Online Appointment!</div>
            <br/>
            <div className="featurebox">
            <div className="box1">
           <img  className = "findimg" src = {findadoctor} alt="find" />
                <h1 className="findtext">FIND A DOCTOR!</h1>
                <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_learn.svg"/>
                
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
