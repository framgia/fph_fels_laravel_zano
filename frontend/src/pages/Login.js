
import React from 'react';
import {Form, Button} from 'react-bootstrap';


export default function Login(){

  return( 
    <Form >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address / Username</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>		  
      <Button variant="primary" type="submit">Login</Button>
    </Form>
  )
}