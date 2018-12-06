import React, {Component} from 'react';

class Article extends Component {

  render () {
    let articlesList = this.props.articles.map(article =>
      <div class="article">
        <h2>{article.title}</h2>
        <img class="articleimg" src={article.urlToImage}/>
        <p>Written by {article.author}</p>
        <p>{article.description}</p>
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
