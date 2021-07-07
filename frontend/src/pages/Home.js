import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { Row, Col, Card, Jumbotron, Container } from 'react-bootstrap';
import Icon from '../assets/images/usericon.png';
import '../assets/CSS/dash.css';

export default function Home() {
	return (
		<React.Fragment>
		
				<Row className="ContainerDash">
				<div className="ProfPic">
					<h1>Dash board</h1>

					<Row className="ProfName">
						<img src={Icon} alt="" className="Profile-image"/>

						<div className="ProfInfo">
							<ul>
								<li><h6>John Doe</h6></li>
								<li>Learned 20 words</li>
								<li>Learned 20 words</li>
							</ul>
						</div>
					</Row>
				</div>

			<Col xs="auto">
				<Row>
				<Jumbotron>
					<div className="ActivityHeader">
						<h5>Activities</h5>
					</div>
					<div className="Activities">
						<img src={Icon} alt=""  className="ActivityImage"/>
						<div className="Activitywords">
							<p>You learned 20 of 20 words Basic 500</p>
							<p>2 days ago</p>
						</div>
					</div>
					<div className="Activities">
						<img src={Icon} alt=""  className="ActivityImage"/>
						<div className="Activitywords">
							<p>You learned 20 of 20 words Basic 500</p>
							<p>2 days ago</p>
						</div>
					</div>
					<div className="Activities">
						<img src={Icon} alt=""  className="ActivityImage"/>
						<div className="Activitywords">
							<p>You learned 20 of 20 words Basic 500</p>
							<p>2 days ago</p>
						</div>
					</div>
					<div className="Activities">
						<img src={Icon} alt=""  className="ActivityImage"/>
						<div className="Activitywords">
							<p>You learned 20 of 20 words Basic 500</p>
							<p>2 days ago</p>
						</div>
					</div>
				<div className="Activities">
					<img src={Icon} alt=""  className="ActivityImage"/>
					<div className="Activitywords">
						<p>You learned 20 of 20 words Basic 500</p>
						<p>2 days ago</p>
					</div>
				</div>
				
				
					</Jumbotron>
				</Row>
			</Col>
			</Row>
	
	
		</React.Fragment>
	)
}
