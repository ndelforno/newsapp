import React, {Component} from 'react';

class Article extends Component {

  render () {
      let articlesList = this.props.articles.map((article, index) =>
        <a href={article.url}>
            <div className="article" key={index}>
                <img className="articleimg" src={article.urlToImage} />
                <h2>{article.title}</h2>
                <p>Written by {article.author}</p>
                <p>{article.content}</p>
                  <p style={{ color: "red" }}>{article.source.name}</p>
                  <a href={article.url} style={{ color: "#234884" }} >Read the full article</a>
            </div>
        </a>)

    return (
      <div>
        {articlesList}
      </div>
    )

  }
}

export default Article
