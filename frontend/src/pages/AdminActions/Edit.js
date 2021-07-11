import React from 'react';
import '../../assets/CSS/adminCRUD.css';
import { useParams } from 'react-router-dom';
import { CategoryData } from "../../components/CategoryData";

const Edit = () => {
    const { id } = useParams();
    const categoryName = CategoryData.filter( data => data.id === id )[0]

    return (
        <div>
            <div  className="AddContainer">
              <div className="addquestionContainer">
                    <form className="addquestionForm"> 
                    <div className="newquestioncontainer">
                        <label><p className="label">Enter Title & Description</p></label>
                        <input type="input" className="choicesinput" placeholder={categoryName.title} value=""/>
                        <textarea name="w3review" className="choicesinput" rows="4" cols="22" placeholder={categoryName.Content}/>
                        </div>
                        <input className="inputbuttonedit" type="submit" value="Submit"/>
                    </form>
                </div>
             </div>
        </div>
    );
};

export default Edit;