import React, { Component } from "react"
import Slider from "react-slick"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Skeleton from "@material-ui/lab/Skeleton"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SpecialityCard from "./SpecialityCard"
import "./specialities.css"

export default function specialities({ patientEmailId }) {
  console.log(patientEmailId)
  const Specialist = [
    {
      img: "dentist.jpg",
      type: "Dentist",
      about: "Teething Trouble?Schedule a dental checkup",
    },
    {
      img: "dietician.jpg",
      type: "Dietician",
      about: " Get guidance on eating right and weight management",
    },
    {
      img: "generalphysician.jpg",
      type: "General Physician",
      about: "Find the right family doctor in your neighbourhood",
    },
    {
      img: "generalsurgeon.jpg",
      type: "General Surgeon",
      about: "Need to get operated?Find the right surgeon",
    },
    {
      img: "orthopedist.jpg",
      type: "Orthopedist",
      about: "For Bone and Joint issues,spinal injuries and more",
    },
    {
      img: "pediatrician.jpg",
      type: "Pediatrician",
      about: "Child Specialist and doctors for infant",
    },
    {
      img: "physiotherapist.jpg",
      type: "Physiotherapist",
      about: "Pulled a muscle?Get it trained by a trained physiotherapist",
    },
  ]
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div>
      <h1>Find experienced doctors across all specialties</h1>
      <div className="sliderslick">
        <Slider {...settings}>
          {Specialist.map((val) => (
            <SpecialityCard
              img={val.img}
              type={val.type}
              about={val.about}
              patientEmailId={patientEmailId}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}
