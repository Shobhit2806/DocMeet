import React from "react"
import Footer from "../Footer/Footer"
import Imageslider from "../landing-page/imageslider"
import Landingfeatures from "../landing-page/landingfeatures"
import Specialities from "../Specialities/specialities"
import Navbar from "./NavbarLoggedIn"
export default function LandingLoggedin(props) {
  const patientEmailId = props.location.state.patientEmailId
  console.log(props)
  return (
    <div>
      <Navbar />
      <Imageslider />
      <Landingfeatures />
      <Specialities patientEmailId={patientEmailId} />
      <Footer />
    </div>
  )
}
