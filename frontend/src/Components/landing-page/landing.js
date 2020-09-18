import React from 'react'
import Navbar from './navbar'
import ImageSlider from './imageslider'
import Landingfeatures from './landingfeatures'
import Specialities from '../Specialities/specialities'
import Footer from '../Footer/Footer'
export default function landing() {
    return (
        <div>
            <Navbar/>
            <ImageSlider />
            <Landingfeatures/>
            <Specialities/>
            <Footer />
        </div>
    )
}
