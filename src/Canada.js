import React, { Component } from 'react';
import Article from './Article'

class Info extends Component {
  constructor(props){
      super(props)
      this.state = {
        articles: ""
      }
    }

  componentDidMount(){
    let url = 'https://newsapi.org/v2/';
    let key = this.props.apiKey;
    let demand = this.props.demand;
    let req = url.concat(demand,key);
    console.log(this.state.articles);

    var base = this
    fetch(req)
      .then((response) => {
        return response.json()
      }).then((json) => {
        base.setState({articles: json.articles});
      }).catch((ex) => {
        console.log('an error occured while parsing!', ex)
      })
  }


  render() {
    if (this.state.articles) {
    return (
        <div class="articles">
          <h2>Canada News</h2>
          <Article articles={this.state.articles}/>
        </div>
      )
    }
    return(
      <div>
        <h2>Canada News</h2>
          Loading...
      </div>
    )
  }


}

export default Info;
