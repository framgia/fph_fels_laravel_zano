import React, { useState } from 'react';
import { QuestionData } from "../../components/QuestionData";
import { CategoryData } from "../../components/CategoryData";
import ReactPaginate from 'react-paginate';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../../assets/CSS/addQuestion.css';
import { Link } from 'react-router-dom';


export default function AddQuestions(){
  const [quests, setQuest] = useState(QuestionData.slice(0,50));
  const [pageNumber, setPageNumber] = useState(0);

  const { id } = useParams();
  const categoryName = CategoryData.filter( data => data.id === id )[0]

  const questsPage = 5
  const pagesVisited = pageNumber * questsPage

  const displayWords = quests.slice(pagesVisited, pagesVisited + questsPage).map((quest) => {  
    let array = [];
    const ans = quest.answerOptions.forEach((aswer) => {
      delete aswer.isCorrect;
      const ansText = aswer.answerText;
      const arrayInside =  array.push(ansText);
      return arrayInside;
    }); 
    
  let conver = {...array.slice()};
  let opA = "A.)  ";
  let opB = "B.)  ";
  let opC = "C.)  ";
  let opD = "D.)  ";
  let converA = opA.concat(conver[0]);
  let converB = opB.concat(conver[1]);
  let converC = opC.concat(conver[2]);
  let converD = opD.concat(conver[3]);

  return (
    <tr> 
      <td>{quest.id}</td>
      <td >{quest.questionText}</td>
      <td>
        <li>{converA}</li>
        <li>{converB}</li>
        <li>{converC}</li>
        <li>{converD}</li>
      </td>
      <td>
        <Link to={`/EditQuestion/${quest.id}`}>
                        Edit Question or Add new choices
        </Link>
        <button>Delete</button>
      </td>
    </tr>
    )
  });

  const pageCount = Math.ceil(quests.length / questsPage);
  const changePage = ({selected}) => {
    setPageNumber(selected);
  };

  return (
  <div>
    <div className="addquestionContainer">
      <form className="addquestionForm"> 
        <h3>{categoryName.title} Category</h3>
        <label><p className="label">Add Questions</p></label>
        <textarea name="w3review" rows="4" cols="22" placeholder="Enter a description"/>
        <input className="inputbutton" type="submit" value="Submit"/>
      </form>
      </div>
      <Table responsive="sm" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Questions</th>
            <th>Choices</th>
            <th>Action</th>
          </tr>
        </thead>
      <tbody>
        {displayWords} 
      </tbody>
      </Table>
        <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"prevBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
       />
    </div>
  );
};