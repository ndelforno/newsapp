import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Canada from './Canada';
import World from './World';
import Business from './Business';
import Tech from './Tech';
import Politics from './Politics';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/Canada">Canada</Link>{' '}
            <Link to="/World">World</Link>{' '}
            <Link to="/Business">Business</Link>{' '}
            <Link to="/Tech">Tech</Link>{' '}
            <Link to="/Politics">Politics</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/Canada" component={Canada} />
          <Route path="/World" component={World} />
          <Route path="/Business" component={Business} />
          <Route path="/Tech" component={Tech} />
          <Route path="/Politics" component={Politics} />
        </div>
      </Router>
    )
  }
}

export default App;
