import React from 'react'
import logo from '../../assets/images/logo.png'
import './navbar.css'

export default function navbar() {
    return (
        <div>
            <nav className="navbar">
                
                <div className="brand-logo">
                <img className="logoimg" src={logo} alt = "logo" />
                </div>
                <a href="#" className="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div className="navlinks">
                <ul>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">SignUp</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}
