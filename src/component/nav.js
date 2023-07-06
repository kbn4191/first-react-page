import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './nav.css';



function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand className='brand' href="#home">Dtask</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-center mx-auto text-md-center text-left">
            <Nav.Link className='nav-item active' href="#home">Home</Nav.Link>
            <Nav.Link  className='nav-item' href="#link"><span className='pie'>|</span> How it works</Nav.Link>
            <Nav.Link  className='nav-item' href="#link"><span className='pie'>|</span> About Us</Nav.Link>
            <Nav.Link  className='nav-item' href="#link"><span className='pie'>|</span> contact Us</Nav.Link>
            
          </Nav>
          
          <div className='navbar-right'>
          <Button variant="outline-success" className='btn1'>Login</Button>
          <Button variant="outline-success" className='btn2'>Register</Button>
          </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;