import React from "react";
import "./styles.css";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";




import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="#home" id="navbarBrand">
        <img id="logobb" src="/src/logoBB.jpeg" />
        
        BLUEBELLA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Your Cart</Nav.Link>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Your Orders</Nav.Link>
          
        </Nav>
        
      </Navbar.Collapse>
      
    </Navbar>
    
    
  );
  
}
