import React, {Component} from 'react';

class Article extends Component {

  render () {
    let articlesList = this.props.articles.map((article, index) =>
      <div className="article" key={index}>
        <h3>{article.title}</h3>
        <img className="articleimg" src={article.urlToImage}/>
        <p>Written by {article.author}</p>
        <p>{article.content}</p>
        <p>{article.source.name}</p>
        <a href={article.url}>Read the full article</a>
      </div>)

    return (
      <div>
        {articlesList}
      </div>
    )

  }
}

export default Article
