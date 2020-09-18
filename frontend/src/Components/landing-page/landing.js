import React from 'react'
import Navbar from './navbar'
import ImageSlider from './imageslider'
import Landingfeatures from './landingfeatures'
import Specialities from '../Specialities/specialities'
export default function landing() {
    return (
        <div>
            <Navbar/>
            <ImageSlider />
            <Landingfeatures/>
            <Specialities/>
        </div>
    )
}
