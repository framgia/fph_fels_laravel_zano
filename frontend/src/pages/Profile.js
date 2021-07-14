import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import Icon from '../assets/images/usericon.png';
import '../assets/CSS/profile.css'
import { DashboardData } from '../components/DashboardData';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  const user = DashboardData.filter(data => data.id === id)[0]


  return (
    <React.Fragment>
      <Row className="ContainerDash">
        <div className="ProfPic-pp">
          <h1>Profile Page</h1>		
          <img src={user.pic} alt="" className="Profile-image-pp"/>
          <div className="ProfInfo-aline">	
            <h3>{user.lName}</h3>
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
                <li><input type="button"  className="button" placeholder="button" value="Follow"/></li>
                <li><a href="">{user.learned}</a></li>
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
                  {DashboardData.map((item) => {
                    return (
                    <div key={item.lName} >
                      <div className={item.mName}>
                        <img src={item.pic} alt="" />
                        <div className={item.cName}>
                        <p>
                          <Link to={`/profile/${item.id}`}>
                            {item.lName}
                          </Link>
                            {item.title}
                          <a href=""> {item.learned}</a>
                        </p>
                        <p>{item.day}</p>
                        </div>
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
