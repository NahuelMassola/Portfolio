import React from 'react';
import { useContext } from 'react'
import { Container , Row , Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { SkillContext } from '../Context/SkillContext';
import './Estudios.css'

    const Estudios = () => {
    const {estudios} = useContext(SkillContext)

    return(
        <>
        <h1 className='title-estudios'>Cursos y Estudios</h1> 
            <Container className='mb-5'>
                <Row>
                    <Col md={12}>
                    <Carousel >
                {estudios.map((option)=>{
                    return( 
                        <Carousel.Item key={option.id} >
                            <img loading="lazy" className="img-carousel d-block w-80"  src={option.img} alt={option.title} />
                            <Carousel.Caption>
                                <Col className='info'>
                                    <p>{option.text}</p>
                                </Col>
                            </Carousel.Caption>
                        </Carousel.Item>
                        )})}
                    </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Estudios;