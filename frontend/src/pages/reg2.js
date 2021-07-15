import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Register extends Component{
  state = {
    fname:'',
    lname:'',
    email:'',
    password:'',
    file_path: ''
  }

  handleInput = e => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }

   onChangeFile = e => {
     console.log(e.target.files[0])
     let file = e.target.files[0]
     let reader = new FileReader();
     reader.onload = (e) => {
      this.setState({
        file_path: e.target.result
       })
     };
     reader.readAsDataURL(file);
   
  }


  saveRegister = e => {
    e.preventDefault();
      const formData = new FormData();
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
          }
      }

    formData.append('fname',this.state.fname);
    formData.append('lname',this.state.lname);
    formData.append('email',this.state.email);
    formData.append('password',this.state.password);
    formData.append('file_path',this.state.file_path);
      
    console.log(this.state.file_path)
      
  axios.post('http://localhost:8000/api/register', formData, config);
    if(formData === true){
      alert("success")
    }else{
      alert("fail")
    }
  }

  render(){
    return(
     <Form onSubmit={this.saveRegister} enctype="multipart/form-data">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" filename="file_path" onChange={this.onChangeFile}/>
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

