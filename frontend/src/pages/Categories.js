import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import '../assets/CSS/Category.css';
import { CategoryData } from "../components/CategoryData";

export default function Categories() {
	return (
        <div className="categoryContainer">
         
                <h2>Categories</h2>
            
		<Row>
    {CategoryData.map((categ) => {
        return (
            <Col xs={12} md={4} style={{padding: '10px'}}>
            <Card className="cardHighlight">
                <Card.Body>
                    <Card.Title>
                        <h2>{categ.title}</h2>
                    </Card.Title>
                    <Card.Text>
                        {categ.Content}
                    </Card.Text>
                    <Button variant="dark">Start</Button>
                </Card.Body>
            </Card>
        </Col>
        );
    })}
		  
           
		</Row>
        </div>
	)
}
