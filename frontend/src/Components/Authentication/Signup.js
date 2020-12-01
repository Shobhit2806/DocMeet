import React from 'react'
import SignUpForm from './SignupForm';
import image1 from '../../assets/images/img1.svg'
import Navbar from '../landing-page/navbar'
import './signup.css'

function Signup() {
    return (
        <div>
            <Navbar />
              <section id="about" className="about">
            <div className="container">
          
              <div className="row no-gutters">
                <div className="col-lg-6 video-box">
          
                
                  
                <img src={image1} className="imgsignup" alt="image" />
                  
                  
                </div>
          
                <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
          
                  <div className="section-title">
                    <h2 className="textsignuphead">Sign Up Here</h2>
                    <p></p>
                  </div>
                  
                    
                  <SignUpForm/>
                  
          
            
          
                  
          
          
                
          
            </div>
            </div>
            </div>
          </section>
        </div>
    )
}

export default Signup
