import React from 'react';
import './App.css';
//Success POPUP
import Swal from 'sweetalert2'
//For API Requests
import axios from 'axios';

class Register extends React.Component
{
  constructor(props)
  {
    super(props);
    
    this.state = {
      imagedata : String
    };
    this.addFormData = this.addFormData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //FileChange
  handleChange(file)
  {
    this.setState({ 
      imagedata: file[0],
    })
  }
  //Form Submission
  addFormData(evt)
    {
      evt.preventDefault();
      const fd = new FormData();
      
      fd.append('image', this.state.imagedata);
     
      //Post Request to laravel API Route
      axios.post('http://localhost/laravel8/public/api/sample-restful-apis', fd
      ).then(res=>
      {
    this.myFormRef.reset();
    //Success Message in Sweetalert modal
    Swal.fire({
      title: 'Image has been uploaded successfully.',
      text: "Thanks",
      type: 'success',
      
    });
    
    }
    );
    }
  
  
  
  render(Message)
  {
    
    return (
      <div>
       <h1>Therichpost.com</h1>
        <form ref={(el) => this.myFormRef = el}>
               
                
                <label for="image">Image Upload:</label>
                <input onChange={ (e) => this.handleChange(e.target.files) } type="file" id="image" ref="productimage" />
               
                
                <button type="submit" onClick={this.addFormData}>Submit</button>
            </form>
       
        </div>
       
) } }
 export default Register