import React, {Component} from 'react';

class Article extends Component {

  render () {
      let articlesList = this.props.articles.map((article, index) =>
        <a href={article.url}>
            <div className="article grow" key={index}>
                <img className="articleimg" src={article.urlToImage} onError= "PP.jpeg"/>
                <h2 className="artTitle">{article.title}</h2>
                <p className="artContent">{article.content}</p>

                <p style={{ color: "red" }}>{article.source.name}</p>
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
