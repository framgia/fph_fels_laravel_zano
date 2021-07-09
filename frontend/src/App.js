import React from 'react';
import { Container } from 'react-bootstrap';
import NaviBar from './components/Navibar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

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
                </Switch>
              </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
