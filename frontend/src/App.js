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

function App(){

  return (
    <div className="App">
      <BrowserRouter>
        <NaviBar />
        <Container className="my-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/learned" component={Learned} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/login" component={Login} />	
            <Route path="/profile/:id">
               <Profile />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
