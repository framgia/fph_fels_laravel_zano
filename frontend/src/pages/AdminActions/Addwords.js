import React from 'react';
import {Form} from 'react-bootstrap';
import '../../assets/CSS/adminCRUD.css';

const Addwords = () => {
    return (
        <div>
            <div className="AdminAddTitle">
                <h4>Add Category</h4>
            </div>
        
        <div  className="AddContainer">
            <div className="formContainer">
                <form >
                    <div className="title">
                        
                            <label>Title</label>
                            <input type="text" id="title" className="title-input" placeholder="enter" />
                       
                    </div>
                </form>
             </div>
             </div>
        </div>
    );
};

export default Addwords;