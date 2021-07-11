import React from 'react';
import { Container } from 'react-bootstrap';
import NaviBar from './components/Navibar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Learned from './pages/Learned';
import Categories from './pages/Categories';
import QuesAndAnswer from './pages/QuesAndAnswer';
import AdminCateg from './pages/AdminCateg';
import EditQuestion from './pages/AdminActions/EditQuestion';
import Edit from './pages/AdminActions/Edit';
import AddQuestions from './pages/AdminActions/AddQuestions';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <NaviBar />
        <Container className="my-3">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/register" component={Register} />  
                <Route exact path="/login" component={Login} />
                <Route exact path="/QuesAndAnswer" component={QuesAndAnswer} />
                <Route exact path="/learned" component={Learned} />
                <Route exact path="/AdminCateg" component={AdminCateg} />
                <Route exact path="/Edit/:id">
                    <Edit/>
                </Route>
                <Route exact path="/EditQuestion/:id"> 
                   <EditQuestion/>
                </Route>
                <Route exact path="/AddQuestions/:id">
                    <AddQuestions />
                </Route>
                <Route path="/profile/:id">
                   <Profile />
                </Route>
                <Route exact path="/categories" component={Categories} />
							</Switch>
						</Container>
    </BrowserRouter>
    </div>
  );
}

export default App;
