import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './nav.css';

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex saerch" controlId="exampleForm.ControlInput1">
    
        <Form.Control className='mail' type="email" placeholder="input your mail" />
        <Button variant="outline-success" className='btn2'>Search</Button>

      </Form.Group>
      
    </Form>
  );
}

export default TextControlsExample;