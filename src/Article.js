import React, {Component} from 'react';

class Article extends Component {
  render () {
    for (var i = 0; i < this.props.articles.length; i++) {
      return (
        <div>
          <h2>{this.props.articles[i].title}</h2>
          <img src={`this.props.articles[i].urlToImage`}/>
          <p>Written by {this.props.articles[i].author}</p>
          <p>{this.props.articles[i].description}</p>
          <a href={`this.props.articles[i].url`}>Read the full article</a>
        </div>
      )
    }
  }
}

export default Article
