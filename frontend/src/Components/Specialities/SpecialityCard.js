import React from "react";
import { Card,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Speciality = ({ img, type, about }) => {
  console.log(`../../images/speciality_pic/${img}`);
  return (
    <div>
    <Card className="cardspeciality" style={{ width: '80%',height:'auto'}}> 
    <Card.Img variant="top" src={require(`../../assets/images/${img}`)} width="100%" height="200px" />
    <Card.Body>
        <Card.Title>{type}</Card.Title>
    <Card.Text>
        {about}
    </Card.Text>
        <Link to={{
          pathname:type
        }}><Button style={{backgroundColor:'#CD6C7D',color:'#F5F9E9',border:'none'}}>Book Now</Button></Link>
    </Card.Body>
    </Card>
</div>
  );
};

export default Speciality;