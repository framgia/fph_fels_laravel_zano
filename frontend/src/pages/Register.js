import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function Register(){

  return(
    <Form>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name" placeholder="first name" />
      </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name" placeholder="last-name" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Email" />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Verify Password</Form.Label>
        <Form.Control type="password" placeholder="verify password"  />
      </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Male</option>
          <option>Female</option>
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Language</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Japanese</option>
          <option>English</option>
          <option>Bisaya</option>
        </Form.Control>
      </Form.Group>
      <Button  type="submit" >Register</Button>
    </Form>
  )
}
