
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () =>{ 
    return( 
    <>
        <Navbar className="sticky " expand="lg">
        <Container>
            <Link to={"/"}><h1 className='title'><strong>ND</strong></h1></Link>
            <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" expand="lg" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >
                <Link className='nav-text' to={"/"}><strong>Inicio</strong></Link>
                <Link className='nav-text' to={"/Me"}><strong>Sobre mi</strong></Link>
                <Link className='nav-text' to={"/Skills"}><strong>Habilidades y Estudios</strong></Link>
                <Link className='nav-text' to={"/Work"}><strong>Proyectos</strong></Link>
                <Link className='nav-text' to={"/Contact"}><strong>contacto</strong></Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
    );
};

export default NavBar;