import React from 'react';
import './HabSkill.css'
import Skills from '../../pages/Skills/Skills'
import Estudios from '../Estudios/Estudios';
import { Container, Row , Col } from 'react-bootstrap';

const HabsSkill = () => {
    return(
        <Container>
            <Row>
                <h1 className='title-skill'>Conocimientos</h1>
                <Col className='skill'>
                    <Skills/>
                </Col>
            </Row>
            <Row>
                <Col className='estudios'>
                    <Estudios/>
                </Col>
            </Row>
        </Container>
    )
}

export default HabsSkill;