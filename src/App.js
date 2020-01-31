import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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

    fetchInfo = (req) => {
        fetch(req)
            .then((response) => {
                return response.json()
            }).then((json) => {
                this.setState({ articles: json.articles });
            }).catch((ex) => {
                console.log('an error occured while parsing!', ex)
            })
    }

    handleClick = async (e) => {
        console.log(e.target.id)
      switch (e.target.id) {
        case "Canada":
            await this.setState({demand: "top-headlines?country=ca&", title: e.target.id});
            break;
        case "Home":
            await  this.setState({demand: "everything?q=news&sortBy=date&", title: e.target.id});
            break;
        case "France":
            await this.setState({demand: "top-headlines?country=fr&", title: e.target.id });
            break;
        case "Business":
            await this.setState({demand: "top-headlines?country=ca&category=business&", title: e.target.id });
            break;
        case "Sport":
            await this.setState({demand: "top-headlines?country=ca&category=sports&", title: e.target.id });
            break;
        case "Tech":
            await this.setState({demand: "top-headlines?country=ca&category=technology&", title: e.target.id });
            break;
        case "Health":
            await this.setState({demand: "top-headlines?country=ca&category=health&", title: e.target.id });
            break;
        }
        console.log(this.state.demand)
      this.fetchInfo(this.state.url.concat(this.state.demand, this.state.key));
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
