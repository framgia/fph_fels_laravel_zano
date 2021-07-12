import React, { useState } from 'react';
import {Row,Col} from 'react-bootstrap';
import '../../assets/CSS/adminCRUD.css';
import { useParams } from 'react-router-dom';
import { QuestionData } from "../../components/QuestionData";

const EditQuestion = () => {
    const { id } = useParams();
    const questAndAns = QuestionData.filter( data => data.id === id)[0]



    return (
        <div>
            <div className="AdminAddTitle">
                <h4>Edit Question and Add New Choices</h4>
            </div>
        
        <div  className="AddContainer">
            <Row>
                <Col>
                <div className="addquestionContainer">
                    <form className="addquestionForm"> 
                        <h3>Edit Question</h3>
                        <div className="newquestioncontainer">
                        <textarea name="w3review" rows="7" cols="22" placeholder={questAndAns.questionText} value=""/>
                        </div>
                        <input className="inputbutton" type="submit" value="Submit"/>      
                    </form>
                </div>
                </Col>
                <Col>
                <div className="addquestionContainer">
                    <form className="addquestionForm"> 
                        <h3>Add Choices</h3>
                        <div className="newquestioncontainer">
                        <input className="choicesinput" type="input" placeholder="A.)" value="" />
                        <input className="choicesinput" type="input" placeholder="B.)" value="" />
                        <input className="choicesinput" type="input" placeholder="C.)" value="" />
                        <input className="choicesinput" type="input" placeholder="D.)" value="" />
                        </div>
                        <input className="inputbutton" type="submit" value="Submit"/>
                    </form>
                  </div>
                  </Col>
             </Row>
             </div>
        </div>
    );
};

export default EditQuestion;