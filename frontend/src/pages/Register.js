import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Register extends Component{
  state = {
    fname:'',
    lname:'',
    email:'',
    password:''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  saveRegister = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8000/api/register', this.state);
    alert("alert")
  }

render(){
  return(
      <Form onSubmit={this.saveRegister}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control  type="text" name="fname" value={this.state.fname} onChange={this.handleInput}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lname" value={this.state.lname} onChange={this.handleInput} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleInput} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInput} />
          </Form.Group>
        <Button  type="submit" >Register</Button>
      </Form>
    )
  }
}
export default Register;
