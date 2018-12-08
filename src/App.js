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
import France from './France';
import Business from './Business';
import Tech from './Tech';
import Sport from './Sport';
import Entertainment from './Entertainment';
import Health from './Health';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>The Expatriates</h1>
          <hr></hr>
          <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/Canada">Canada</Link>{' '}
            <Link to="/France">France</Link>{' '}
            <Link to="/Business">Business</Link>{' '}
            <Link to="/Tech">Tech</Link>{' '}
            <Link to="/Sport">Sport</Link>{' '}
            <Link to="/Entertainment">Entertainment</Link>
            <Link to="/Health">Health</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/Canada" component={Canada} />
          <Route path="/France" component={France} />
          <Route path="/Business" component={Business} />
          <Route path="/Tech" component={Tech} />
          <Route path="/Sport" component={Sport} />
          <Route path="/Entertainment" component={Entertainment} />
          <Route path="/Health" component={Health} />
          <footer>Made By Nicolas Delforno</footer>
        </div>
      </Router>
    )
  }
}

export default App;
