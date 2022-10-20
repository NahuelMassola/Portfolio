import { Container , Row , Col } from "react-bootstrap";
import "./Home.css"
import Redes from "../../Components/Redes/Redes";

const Home = () => {
    return (
      <Container className="home vh-100">
		    <Row className="text-home">
          <Col md={6} sm={12}>
          <h2 className="text-hola">¡Hola!, soy</h2>
          <h1 className="text-nombre">
            <span className="N">N</span>
            <span className="N">a</span>
            <span className="N">h</span>
            <span className="N">u</span>
            <span className="N">e</span>
            <span className="N">l</span>
            <span className="N"> </span>
            <span className="N">D</span>
            <span className="N">e</span>
            <span className="N">l</span>
            <span className="N">l</span>
            <span className="N">a</span>
            <span className="N">c</span>
            <span className="N">e</span>
            <span className="N">c</span>
            <span className="N">c</span>
            <span className="N">a</span>
          </h1>
          <h2 className="text-estudio">Desarrollador Front-End</h2>
          </Col>
          <Col md={6} sm={12} >
              <Redes/>
          </Col>  
          <Col className="btn-sen">
          <button className="btn-se btn--se">Ver Proyectos</button>
          <button className="btn-se btn--con">Contacto</button>
          </Col>
        </Row>
      </Container>
    )
}

export default Home;