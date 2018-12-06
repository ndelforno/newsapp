import React, { Component } from 'react';
import Article from './Article'

class Home extends Component {
  constructor(props){
      super(props)
      this.state = {
        articles: ""
      }
    }

  componentDidMount(){
    let req = 'https://newsapi.org/v2/everything?' +
          'q=news&' +
          'sortBy=popularity&' +
          'apiKey=8c29924efc99428bacd58ae603967956';

    var base = this
    fetch(req)
      .then((response) => {
        return response.json()
      }).then((json) => {
        base.setState({articles: json.articles});
        console.log(this.state.articles)
      }).catch((ex) => {
        console.log('an error occured while parsing!', ex)
      })
  }


  render() {
    let articles = this.state.articles
    console.log(articles)
    if (this.state.articles) {
    return (
        <div class="articles">
          <h1>home</h1>
          <Article articles={articles}/>
        </div>
      )
    }
    return(
      <div>
        <h2>Home</h2>
          Loading...
      </div>
    )
  }


}

export default Home;
