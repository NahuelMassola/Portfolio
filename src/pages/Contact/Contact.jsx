import { collection, serverTimestamp, addDoc, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { Col, Container, Row  } from "react-bootstrap";
import swal from "sweetalert";
import { motion } from "framer-motion";
import "./Contact.css"


// Componente Contact //
const Contact = () => {
    const [ nombre , setNombre ] = useState('');
    const [ mensaje , setMensaje ] = useState('');
    const [ telefono , setTelefono ] = useState('');
    const [ email , setEmail ] = useState(''); 
    const db = getFirestore(); 

    const handleNombre = (e) => setNombre(e.target.value);
    const handleTelefono = (e) => setTelefono(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleMensaje = (e) => setMensaje(e.target.value);

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        mensaje: /^[a-zA-ZÀ-ÿ\s¿?!¡,.]{4,100}$/,
    };

    const clearDatos = () => {   
        setMensaje('');
        setEmail('');
        setNombre('');
        setTelefono('');
    }

    const confirmCheckout = (e) => { e.preventDefault();
        const order = {
            buyer: { nombre , mensaje , telefono , email },
            date: serverTimestamp(),
        } ;

    const userMensaje = collection( db , 'Mensaje') ;
        addDoc ( userMensaje , order ).then((res) => {
            swal({
                title: 'Message Send!',
                icon: 'success'
                })
        })
        clearDatos();
    }


    return (
        <>
        <h3 className="title-contact text-center">CONTACTO</h3>
        <Container className="formm">
            <Row className="form">
                <Col md={10} sm={10}>
                    <motion.form action="" className="form" onSubmit={confirmCheckout}>
                        <input className="form-control" style={{color: (nombre=== "" ? `` :( expresiones.nombre.test(nombre)===false?"red": (nombre=== " " ?" ":"green"))) }} required type="text" value={nombre} placeholder="Name" onChange={handleNombre}/>
                        <input className="form-control" style={{color: (email=== "" ? `` :( expresiones.email.test(email)===false?"red": (email=== " " ?" ":"green"))) }} required type="text" value={email} placeholder="Email" onChange={handleEmail}/>
                        <input className="form-control" required type="number" value={telefono} placeholder="Phone" onChange={handleTelefono}/>
                        <textarea className="form-control form--control"  required dftype="text" value={mensaje} placeholder="Message" onChange={handleMensaje}/>
                        <Col className="btn-send">
                            <button className="btn-se">Send Message!</button>
                        </Col>
                    </motion.form>
                </Col>
            </Row> 
        </Container>
        </>
    )
}

export default Contact;