import React from 'react';
// Import the necessary components from react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/CSS/dash.css';


export default function NaviBar() {
	return (

		<Navbar bg="dark" expand="lg">
      
            <Container>
                <Navbar.Brand href="/" className="fontcolor">E-Learning</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                <Nav className="me-auto">
                <Nav.Link href="/login" className="fontcolor">Login</Nav.Link>
                <Nav.Link href="/register" className="fontcolor">Register</Nav.Link>
                <NavDropdown  className="fontcolor" title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/learned"  className="dropdowncolor">Lessons</NavDropdown.Item>
                  <NavDropdown.Item href="/categories"  className="dropdowncolor">Categories</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3"  className="dropdowncolor">Profiles</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="dropdowncolor">Admin</NavDropdown.Item>
                </NavDropdown>
              </Nav>

               
                </Navbar.Collapse>
            </Container>
          
        </Navbar>
     
	)
}
