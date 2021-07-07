import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import Icon from '../assets/images/usericon.png';
import '../assets/CSS/profile.css'
import { DashboardData } from '../components/DashboardData';
import { useParams } from 'react-router-dom';

export default function Profile() {
	
	const { lName } = useParams();

	return (
		<React.Fragment>
		
				<Row className="ContainerDash">

				<div className="ProfPic-pp">
					<h1>Profile Page</h1>		
			    	<img src={Icon} alt="" className="Profile-image-pp"/>
					<div className="ProfInfo-aline">	
							<h3>{lName}</h3>
							<div className="line"></div>
					</div>
							
							<ul>
							
								<li>
								<a href="">
									<ul>
										<li>20</li>
										<li>followers</li>
									</ul>
								
								</a>
								</li>
								
								<li>
								<a href="">
									<ul>
										<li>20</li>
										<li>following</li>
									</ul>
								
								</a>
								</li>
							</ul>
							<div className="ProfBottom">
								<ul>
									<li><button>FOLLOW</button></li>
									<li><a href="">Learned 20 Words</a></li>
								</ul>
							</div>		
				</div>
		<div className="Col-pp">
			<Col xs="auto" >
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
						{DashboardData.map((item, index) => {
							return (
								<div key={index.id} className={item.mName}>
									<img src={item.pic} alt="" className="ActivityImage"/>
									<div className={item.cName}>
										<p><a href={'/profile/'+index.lName}>{item.lName}</a> {item.title} <a href="">{item.learned}</a></p>
										<p>{item.day}</p>
									</div>
								</div>
							)
						})}
					</div>
				
				
					</Jumbotron>
				</Row>
			</Col>
			</div>
			</Row>
	
	
		</React.Fragment>
	)
}
