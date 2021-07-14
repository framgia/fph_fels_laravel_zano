import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import '../assets/CSS/dash.css';
import { CategoryData } from "../components/CategoryData";
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

export default function AdminCateg() {
  const [users, setUsers] = useState(CategoryData.slice(0,30));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 7
  const pagesVisited = pageNumber * usersPerPage

  const displayWords = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
        
  return (
      <tbody>
        <tr>
          <td>{user.id}</td>
          <td>
            <Link to={`/AddQuestions/${user.id}`}>
            {user.title}
            </Link>
          </td>
          <td>{user.Content}</td>
          <td className="TableAction td">
            <Link to={`/Edit/${user.id}`}>
            Edit
            </Link>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    );
  });

    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({selected}) => {
     setPageNumber(selected);
    };

  return (
    <React.Fragment>
      <div className="tableAlign">
        <div className="addquestionContainer">
          <form className="addquestionForm"> 
            <div className="newquestioncontainer">
              <label><p className="label">Add New Category</p></label>
              <input type="input" className="choicesinput" placeholder="Enter Title" value=""/>
              <textarea name="w3review" className="choicesinput" rows="4" cols="22" placeholder="Enter a description"/>
            </div>
            <input className="inputbuttonadmin" type="submit" value="Submit"/>
           </form>
        </div>
        <Table  striped bordered hover variant="dark">
          <thead>
            <tr>
              <th> #</th>
              <th> Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>      
           {displayWords}
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
    </React.Fragment>
  )
}
