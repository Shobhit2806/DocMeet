import React , {useEffect,Component} from 'react'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import queryString from "query-string";
import './navbar.css'



export default class Navbar extends Component {
    componentWillMount() {
        // var query = queryString.parse(this.props.location.search);
        // if (query.token) {
        //   window.localStorage.setItem("jwt", query.token);
        //   this.props.history.push("/");
        // }
        // //console.log(this.props.location)
      }
      
    render() {
        
        return (
            
            <div>
                 
            <nav className="navbar">
                
                <div className="brand-logo">
                <img className="logoimg" src={logo} alt = "logo" />
                </div>
                <a href="#" className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className="navlinks">
                <ul>
                    <li><a href ="http://localhost:3000/auth/google">Login with google</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">SignUp</a></li>
                </ul>
                </div>
            </nav>
        </div>
            
        )
    }
}

