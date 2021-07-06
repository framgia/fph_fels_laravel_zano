import React from 'react';
// Import the necessary components from react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NaviBar() {
	return (
		<Navbar>
            <Container>
                <Navbar.Brand href="/">E-Learning</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                <Nav className="me-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Lessons</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Categories</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Profiles</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Admin</NavDropdown.Item>
                </NavDropdown>
              </Nav>

               
                </Navbar.Collapse>
            </Container>
        </Navbar>
	)
}
