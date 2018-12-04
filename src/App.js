import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './Homepage';
import Post from './Post';
import FavoriteMovies from './FavoriteMovies';
import FavoriteFood from './FavoriteFood';
import About from './About';


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
