import React from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import LazyLoad from "react-lazy-load"

const Speciality = ({ img, type, about, patientEmailId }) => {
  console.log(patientEmailId)
  return (
    <div>
      <Card className="cardspeciality" style={{ width: "80%", height: "auto" }}>
        {/* <LazyLoad
      width="100%" 
      height="200px" 
      debounce={false}
      
      >
        <Card.Img variant="top" src={require(`../../assets/images/${img}`)} />
    </LazyLoad> */}
        <Card.Body>
          <Card.Title>{type}</Card.Title>
          <Card.Text>{about}</Card.Text>
          <Link
            to={{
              pathname: type,
              state: {
                patientEmailId: patientEmailId,
              },
            }}
          >
            <Button style={{ backgroundColor: "#CD6C7D", color: "#F5F9E9", border: "none" }}>
              Book Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Speciality
