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
    selectedCountry: "ca",
    selectedCategory: "General",
      demand: "top-headlines?country=ca&pagesize=12&",
    key: "apiKey=8c29924efc99428bacd58ae603967956",
    title: "Home",
    articles: [],
    }

    componentDidMount() {
        this.fetchInfo(this.state.url.concat(this.state.demand, this.state.key));
        document.getElementById('CA').classList.add('ctryChecked')
        document.getElementById('General').classList.add('catChecked')
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
      var current = document.getElementsByClassName("catChecked");
      if (current.length > 0) {
          current[0].className = current[0].className.replace("catChecked", "");
      }
      e.target.classList.add("catChecked")
            this.setState({ selectedCategory: e.target.id });
        await this.setState({ demand: "top-headlines?country=" + this.state.selectedCountry + "&category=" + e.target.id + "&pagesize=12&", title: e.target.id });
      this.fetchInfo(this.state.url.concat(this.state.demand, this.state.key));
    };

    chooseCountry = async (e) => {
        var current = document.getElementsByClassName("ctryChecked");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("ctryChecked", "");
        }
        e.target.classList.add("ctryChecked")
        await this.setState({selectedCountry: e.target.id});
        if (this.state.selectedCategory) {
            this.setState({ demand: "top-headlines?country=" + this.state.selectedCountry + "&category=" + this.state.selectedCategory + "&pagesize=12&" });
        } else {
            this.setState({ demand: "top-headlines?country=" + this.state.selectedCountry + "&" })
        }
        this.fetchInfo(this.state.url.concat(this.state.demand, this.state.key));
    }

  render() {
    return (
        <div>
            <div id="navbar" className="sticky" >
                <h1>The Expatriates</h1>
                <div id= "choiceDiv">
                    <div id="ctryDiv">
                        <Country chooseCountry={this.chooseCountry} />
                    </div> |
                    <div id="catDiv">
                        <Category handleClick={this.handleClick} />
                    </div>
                </div>
            </div>
            <div className="articles">
                <Article articles={this.state.articles} />
            </div>
          <footer><p>Made By Nicolas Delforno</p></footer>
        </div>
    )
  }
}

const Category = (props) => {
    let categories = ["General", "Business", "Sports", "Technology", "Health","Science", "Entertainment"]
  return (
      categories.map(cat => <button id={cat} key={cat} onClick = {props.handleClick}> {cat} </button>)
  )
};

const Country = (props) => {
    let countries = ["CA", "FR", "US"]
    return (
        countries.map(ctry => <button id={ctry} key={ctry}  onClick={props.chooseCountry}> {ctry} </button>)
    )
};

export default App;
