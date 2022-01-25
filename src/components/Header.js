import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='py-4'>
        <Container>
            <Navbar.Brand href="#home" >Aaron Yuen</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#project">Project</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                </Nav>
                {/* <Button variant="outline-success">Contact Me</Button> */}
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;