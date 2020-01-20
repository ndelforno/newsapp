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
import Article from './Article'

class App extends Component {
  state = {
    url : 'https://newsapi.org/v2/',
    search: "",
    demand: "everything?q=news&sortBy=date&",
    key: "apiKey=8c29924efc99428bacd58ae603967956",
    title: "Home",
    articles: [],
    }

    componentDidMount() {
        this.fetchInfo(this.state.url.concat(this.state.demand, this.state.key));
    }

    fetchInfo = async (req) => {
        await fetch(req)
            .then((response) => {
                return response.json()
            }).then((json) => {
                this.setState({ articles: json.articles });
            }).catch((ex) => {
                console.log('an error occured while parsing!', ex)
            })
    }

  handleClick = (e) => {;
    switch (e.target.id){
        case "Canada":
            this.setState({demand: "top-headlines?country=ca&", title: e.target.id});
            break;
        case "Home":
            this.setState({ demand: "everything?q=news&sortBy=date&", title: e.target.id});
            break;
        case "France":
            this.setState({ demand: "top-headlines?country=fr&", title: e.target.id });
        case "Business":
            this.setState({ demand: "top-headlines?country=ca&category=business&", title: e.target.id });
            break;
        case "Sport":
            this.setState({ demand: "top-headlines?country=ca&category=sports&", title: e.target.id });
            break;
        case "Tech":
            this.setState({ demand: "top-headlines?country=ca&category=technology&", title: e.target.id });
            break;
        case "Health":
            this.setState({ demand: "top-headlines?country=ca&category=health&", title: e.target.id });
            break;
      }
      var req = this.state.url.concat(this.state.demand, this.state.key);
      var resp = this.fetchInfo(req);
      console.log(resp)
  };


  render() {
    return (
        <div>
          <h1>The Expatriates</h1>
          <hr></hr>
            <HomeButtons handleClick={this.handleClick} />
                <div class="articles">
                    <h2>{this.state.title}</h2>
                    <Article articles={this.state.articles} />
                </div>
          <footer>Made By Nicolas Delforno</footer>
        </div>
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
