import React from 'react';
import { Row } from 'react-bootstrap';
import Icon from '../assets/images/usericon.png';
import '../assets/CSS/dash.css';
import { DashboardData } from '../components/DashboardData';
import { Link } from 'react-router-dom';


export default function Dash() {
	return (
	
				<div className="ProfPic">
					<h1>Dashboard</h1>

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

		
	)
}
