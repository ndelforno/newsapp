import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Info from './Canada';
import France from './France';
import Business from './Business';
import Tech from './Tech';
import Sport from './Sport';
import Entertainment from './Entertainment';
import Health from './Health';

class App extends Component {
  state = {
    search: "",
    demand: "everything?q=news&sortBy=date&",
    key: "apiKey=8c29924efc99428bacd58ae603967956"
  }
  handleClick = (e) => {;
    switch (e.target.id){
      case "Canada":
        this.setState({demand: "top-headlines?country=ca&"});
      break;
      case "Home":
        this.setState({demand: "everything?q=news&sortBy=date&"});
      break;
      case "France":
        this.setState({demand: "top-headlines?country=fr"});
    }
  };
  render() {
    return (
      <Router>
        <div>
          <h1>The Expatriates</h1>
          <hr></hr>
          <HomeButtons handleClick = {this.handleClick}/>
          <Info component = {Info} apiKey = {this.state.key} demand = {this.state.demand} />
          <footer>Made By Nicolas Delforno</footer>
        </div>
      </Router>
    )
  }
}

const HomeButtons = (props) => {
  let categories = ["Home","France","Canada","Business","Sport","Tech","Health"];
  return (
    categories.map(cat => <button id = {cat} onClick = {props.handleClick}> {cat} </button>)
  )
};

export default App;
