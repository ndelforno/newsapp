import React, {Component} from 'react';

class Article extends Component {

  render () {
      let articlesList = this.props.articles.map((article, index) =>
        <a href={article.url}>
            <div className="article" key={index}>
                <img className="articleimg" src={article.urlToImage} onError= "PP.jpeg"/>
                <h2 className="artTitle">{article.title}</h2>
                  <p className="artContent">{article.content}</p>
                  <p className="writtenBy">Written by {article.author}</p>
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
