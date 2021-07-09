import React from 'react';
import '../../assets/CSS/adminCRUD.css';

const Edit = () => {
    return (
        <div>
            <div className="AdminAddTitle">
                <h4>Edit Category</h4>
            </div>
        
        <div  className="AddContainer">
            <div className="formContainer">
                <form >
                    <div className="title">
                            <label>Edit Title</label>
                            <input type="text" id="title" className="title-input" placeholder="enter a title" />
                            <label>Edit Description</label>
                            <textarea name="w3review" rows="4" cols="22" placeholder="Enter a description"></textarea>
                    </div>
                </form>
             </div>
             </div>
        </div>
    );
};

export default Edit;