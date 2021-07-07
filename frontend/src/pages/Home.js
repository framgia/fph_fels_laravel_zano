import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import Icon from '../assets/images/usericon.png';
import '../assets/CSS/dash.css';
import { DashboardData } from '../components/DashboardData';
import { Link } from 'react-router-dom';


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
								<li><a href="">Learned 20 words</a></li>
								<li><a href="">Learned 5 lessons</a></li>
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
							<p><a href="">You</a> learned 20 of 20 words <a href="">Basic 500</a></p>
							<p>2 days ago</p>
						</div>
					</div>
					<div >
						{DashboardData.map((item) => {
							return (
								<div key={item.lName} >

								<Link to={`/profile/${item.lName}`}>
								<div className={item.mName}>
									<img src={item.pic} alt="" />
									<div className={item.cName}>
										<p>
										
										{item.lName}
									
										{item.title} <a href="">{item.learned}</a></p>
										<p>{item.day}</p>
										
									</div>
									</div>
									</Link>
								</div>
							)
						})}
					</div>
				
				
					</Jumbotron>
				</Row>
			</Col>
			</Row>
	
	
		</React.Fragment>
	)
}
