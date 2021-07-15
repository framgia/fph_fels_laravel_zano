import React, {useState} from 'react';
import axios from 'axios';

const Register = () => {
    const [fname, setFname] = useState('')
    const [lname,setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file_path, setFile_path] = useState('')

    const onChangeFile = e => {
        setFile_path(e.target.files[0]);
    }
    const changeOnClick = e => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('fname', fname);
        formData.append('lname', lname);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('file_path', file_path);
        setFname('')
        setLname('')
        setEmail('')
        setPassword('')
        setFile_path('')

        axios.post('http://localhost:8000/api/register',formData).then(res=>res.data).catch(err=> {console.log(err)});
    }
    return (
        <div>
            <form onSubmit={changeOnClick} encType="multiple/form-data">
                <div>
                    <label>fName</label>
                    <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)}/>
                </div>
                <div>
                  <label>lName</label>
                  <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)}/>
                </div>

                 <div>
                    <label>email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                 <div>
                    <label>passwor</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                  <label>Image</label>
                  <input type="file" filename="file_path" onChange={onChangeFile}/>
                </div>
                  <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;