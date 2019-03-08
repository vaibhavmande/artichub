import React, { Component } from "react";

import AddArticleForm from "./AddArticleForm";
export default class Contents extends Component {
  constructor() {
    super();
    this.state = [
      {
        id: 1,
        link: "",
        rating: 0
      },
      {
        id: 2,
        link: "",
        rating: 4
      },
      {
        id: 3,
        link: "",
        rating: 1
      }
    ];

    this.addArticle = this.addArticle.bind(this);
  }

  addArticleHandler = () => {};

  addArticle(article) {
    const articles = Object.assign({}, this.state);
    articles.push(article);
    this.setState(articles);
  }

  render() {
    return (
      <div className="contents">
        <AddArticleForm isVisible={true} addArticle={this.addArticle} />
      </div>
    );
  }
}
