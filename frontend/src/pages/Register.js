import React, {useState} from 'react';
import axios from 'axios';
import { Form, FormControl } from 'react-bootstrap';
import '../assets/CSS/dash.css';

const Register = () => {
  const [fname, setFname] = useState('')
  const [lname,setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [language, setLanguage] = useState('')
  const [gender, setGender] = useState('')
  const [filename, setFilename] = useState('')

  const onChangeFile = e => {
     setFilename(e.target.files[0]);
    }
  const changeOnClick = e => {
    console.log(filename)
    e.preventDefault();

  const formData = new FormData();

  formData.append('fname', fname);
  formData.append('lname', lname);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('language', language);
  formData.append('gender', gender);
  formData.append('filename', filename);
  
  axios.post('http://localhost:8000/api/register',formData)
    if(formData === true){
      alert("Something went wrong, please make sure all input are correct!")
    }else{
      alert("Registered Successfully");
    return window.location.reload()
    }
  }
  return (
    <div className="registerContainer">
      <div className="withinregister">
        <Form onSubmit={changeOnClick} encType="multiple/form-data">
          <Form.Group  className="mb-3" controlId="formBasicEmail">
            <Form.Label className="regfont">First Name</Form.Label>
            <Form.Control type="text" value={fname} onChange={(e)=>setFname(e.target.value)}/>
          </Form.Group >
          <Form.Group  className="mb-3" controlId="formBasicEmail">
            <Form.Label className="regfont">Last Name</Form.Label>
            <Form.Control  type="text" value={lname} onChange={(e)=>setLname(e.target.value)}/>
          </Form.Group>
          <Form.Group  className="mb-3" controlId="formBasicEmail">
            <Form.Label className="regfont">Email</Form.Label>
            <Form.Control type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword" >
            <Form.Label className="regfont">Password</Form.Label>
            <Form.Control type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group >
            <label className="regfont">Language</label>
            <FormControl as="select" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="0">------</option>
              <option value="Japanese">Japanese</option>
              <option value="English">English</option>
            </FormControl>
          </Form.Group>
          <Form.Group  >
            <label className="regfont">Gender</label>
            <FormControl as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="0">------</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </FormControl>
          </Form.Group>     
          <div>
            <label className="regfont">Upload Picture</label>
            <input className="regfont" type="file" filename="filename" onChange={onChangeFile}/>
          </div>
          <button className="regbutton" type="submit">Register</button>
        </Form>
      </div>
    </div>
  );
}

export default Register;