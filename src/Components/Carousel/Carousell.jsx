import Carousel from 'react-bootstrap/Carousel';
import TituloDesarrolloWeb from "../../assets/img/desarrolloweb.png"
import TituloJavascript from "../../assets/img/javascriptt.png"
import TituloReact from "../../assets/img/javascriptt.png"
import "../Carousel/Carousel.css"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item >
        <img
          className="img-certificado d-block w-100"
          src={TituloDesarrolloWeb}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-certificado d-block w-100"
          src={TituloJavascript}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-certificado d-block w-100"
          src={TituloJavascript}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;