import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import "./Header.css"
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation().pathname 
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">TODO-APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                            <Link className={location === "/"? "todoItems active" : "todoItems" } to="/">
                                Home
                            </Link>
                            <Link className={location === "/about"? "todoItems active" : "todoItems" }>
                                todo
                            </Link>
                            <Link className={location === "/blog"? "todoItems active" : "todoItems" }>
                                blog
                            </Link>
                           
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;