import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import '../assets/CSS/dash.css';
import { CategoryData } from "../components/CategoryData";
import ReactPaginate from 'react-paginate';

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
                    <td>{user.title}</td>
                    <td>{user.Content}</td>
                    <td className="TableAction"><a href="/Addwords">Add-word</a> | <a href="">Edit</a> | <a href="">Delete</a></td>
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
                 <div className="ActivityHeader-lessons">
                    <h5>Categories</h5>
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