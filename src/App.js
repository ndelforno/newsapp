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
        e.target.classList.add("checked")
        if (e.target.id == "Home") {
          await  this.setState({demand: "top-headlines?country=" + this.state.selectedCountry + "&", title: e.target.id});
        } else {
          await this.setState({demand: "top-headlines?country=" + this.state.selectedCountry + "&category=" + e.target.id + "&", title: e.target.id });
        }
        // var containers = document.getElementById("catDiv");
        // var btns = containers.getElementsByClassName("btn");
        // var current = document.getElementsByClassName("checked");
        // if (current.length > 0) {
        //     current[0].className = current[0].className.replace("checked", "");
        // }
      this.fetchInfo(this.state.url.concat(this.state.demand, this.state.key));
    };

    chooseCountry = async (e) => {
        console.log(e.target.id)
        var containers = document.getElementById("ctryDiv");
        var btns = containers.getElementsByClassName("btn");
        var current = document.getElementsByClassName("checked");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("checked", "");
        }
        e.target.classList.add("checked")
        await this.setState({selectedCountry: e.target.id});
    }

  render() {
    return (
        <div>
          <h1>The Expatriates</h1>
            <hr></hr>
            <div id= "ctryDiv">
                <Country chooseCountry={this.chooseCountry} />
            </div>
            <div id= "catDiv">
                <Category handleClick={this.handleClick} />
            </div>
                <div className="articles">
                    <h2>{this.state.title}</h2>
                    <Article articles={this.state.articles} />
                </div>
          <footer>Made By Nicolas Delforno</footer>
        </div>
    )
  }
}

const Category = (props) => {
  let categories = ["Home","Business","Sports","Technology","Health"];
  return (
      categories.map(cat => <button id={cat} key={cat} onClick = {props.handleClick}> {cat} </button>)
  )
};

const Country = (props) => {
    let countries = ["ca", "fr"]
    return (
        countries.map(ctry => <button id={ctry} key={ctry}  onClick={props.chooseCountry}> {ctry} </button>)
    )
};

export default App;
