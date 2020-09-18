import React, { Component } from 'react';
import { Card,Button } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dentist from '../../assets/images/dentist.jpg'
import dietician from '../../assets/images/dietician.jpg'
import generalphysician from '../../assets/images/generalphysician.jpg'
import generalsurgeon from '../../assets/images/generalsurgeon.jpg'
import orthopedist from '../../assets/images/orthopedist.jpg'
import pediatrician from '../../assets/images/pediatrician.jpg'
import physiotherapist from '../../assets/images/physiotherapist.jpg'
import './specialities.css' 
class specialities extends Component {
    render() {
        var settings = {
            
            
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true

                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };
        return (
        <div>
                <h1>Find experienced doctors across all specialties</h1>
        <div className="sliderslick">
        <Slider {...settings}>
        <div>
            {/* <img className="imgslick" src={findadoctor} alt="a"/> */}
            <Card style={{ width: '18rem',backgroundColor:'pink' }}>
  <Card.Img variant="top" src={dentist} width="100%" height="200px" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
        <div>
        <Card style={{ width: '18rem',backgroundColor:'pink' }}>
  <Card.Img variant="top" src={dietician} width="100%" height="200px" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
        <div>
        <Card style={{ width: '18rem',backgroundColor:'pink' }}>
  <Card.Img variant="top" src={generalphysician} width="100%" height="200px" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
        <div>
        <Card style={{ width: '18rem',backgroundColor:'pink' }}>
  <Card.Img variant="top" src={generalsurgeon} width="100%" height="200px" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
        <div>
        <Card style={{ width: '18rem',backgroundColor:'pink' }}>
  <Card.Img variant="top" src={orthopedist} width="100%" height="200px" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
        <div>
        <Card style={{ width: '18rem',backgroundColor:'pink' }}>
  <Card.Img variant="top" src={pediatrician} width="100%" height="200px"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
       
        <div>
        <Card style={{ width: '18rem',backgroundColor:'pink' }}>
  <Card.Img variant="top" src={physiotherapist} width="100%" height="200px" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>

        </Slider>
        </div>
        </div>
        );
    }
}

export default specialities;