import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row , Col } from 'react-bootstrap';
import dragonball from "../../assets/img/DRAGONBALL.png"
import ChaperoStore from "../../assets/img/CHAPEROSTORE.png"
import FullGaminStore from "../../assets/img/FULLGAMING.png"
import { useContext } from 'react';
import { SkillContext } from '../../Components/Context/SkillContext';
import "./Proyectos.css"


const Proyectos = () => {

    const { skill } = useContext ( SkillContext) ;

    const proyectos = [
        {id: 1 , img:ChaperoStore, texto: "Landing page ,desarrollado con Html, Css, maquetado con Bootstrap, adaptada a dispositivos moviles" , titulo: "CHAPERO STORE" , linkCodigo:"https://github.com/NahuelMassola/RedragonStore " , linkDemo:"https://nahuelmassola.github.io/RedragonStore/" , herramientas:[1,2,7]},
        {id: 2 , img:FullGaminStore, texto: "E-Commerce utilizando Bootstrap, Html, JavaScript y Css, adaptada a dispositivos moviles" , titulo: "FULLGAMING STORE" , linkCodigo:"https://github.com/NahuelMassola/FullgamigStore" , linkDemo:"https://nahuelmassola.github.io/FullgamigStore/" , herramientas:[1,2,3,7]},
        {id: 3 , img:dragonball, texto: "E-Commerce desarrollado con react y con una base de datos en Firebase, adaptada a dispositivos moviles" , titulo: "DRAGONBALL STORE" , linkCodigo:"https://github.com/NahuelMassola/DragonBall-Store" , linkDemo:"https://dragonball-store.netlify.app/" , herramientas:[1,2,3,7,6]},
    ];
    let i = 0

    return (
        <Container className='cards'>
            <Row>
                {
                    proyectos.map( items => 
                        <Col md={4} lg={4} sm={12} key={items.id}> 
                            <Card className='cardContainer' style={{ width: '20rem'}}>
                            <Card.Title className='title-card'>{items.titulo}</Card.Title>
                            <Card.Text className='text-card'>{items.texto}</Card.Text>
                                <Card.Img variant="top" src={items.img} className="img-proyecto"/>
                                <Card.Body>
                                    <div className='text-center mb-3'>
                                        { items.herramientas.map((herramientas)=>{
                                            return(
                                                    <img key={i++} className='img-card' loading="lazy" src={skill[herramientas].img} alt="" />
                                            )
                                        })}
                                    </div>
                                    <div className='d-flex justify-content-evenly'>
                                        <a href={items.linkCodigo}><Button variant="primary">Code</Button></a>
                                        <a href={items.linkDemo}><Button variant="primary">Demo</Button></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                )}
            </Row>
        </Container>
);
}

export default Proyectos;