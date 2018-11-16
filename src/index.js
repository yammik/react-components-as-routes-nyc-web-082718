import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import Messages from './Messages'
import Signup from './Signup'


ReactDOM.render(
  (<Router>
    <React.Fragment>
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/signup" component={Signup} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
