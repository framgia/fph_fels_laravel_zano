import React, { useState } from 'react';
import { Row, Col, Jumbotron, Table } from 'react-bootstrap';
import Icon from '../assets/images/usericon.png';
import '../assets/CSS/dash.css';
import Dash from '../components/Dashboard';
import LessonsData from "../components/LessonsData";
import ReactPaginate from 'react-paginate';

export default function Learned() {
const [users, setUsers] = useState(LessonsData.slice(0,60));
const [pageNumber, setPageNumber] = useState(0);
const usersPerPage = 7
const pagesVisited = pageNumber * usersPerPage
  const displayWords = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
    return (
      <tbody>
        <tr>
          <td>{user.Japanese}</td>
          <td>{user.English}</td>
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
      <Row className="ContainerDash">
      <Dash/>
        <Col xs="auto">
          <Row>
            <div className="tableAlign">
              <div className="ActivityHeader-lessons">
                <h5>Words Learned</h5>
              </div>
              <Table responsive="sm" striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th> Japanese</th>
                    <th>English</th>
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
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
}
