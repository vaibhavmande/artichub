import React, { Component } from "react";

export default class AddArticleForm extends Component {
  constructor() {
    super();
    this.state = {
      link: "",
      isVisible: true
    };

    this.addArticleHandler = this.addArticleHandler.bind(this);
    this.hideArticleForm = this.hideArticleForm.bind(this);
    this.setLink = this.setLink.bind(this);
  }

  addArticleHandler(event) {
    event.preventDefault();

    this.props.addArticle({
      id: 0,
      link: this.state.link,
      rating: 0
    });
  }

  setLink(event) {
    this.setState({ link: event.target.value });
  }

  hideArticleForm() {
    this.setState({
      isVisible: false
    });
  }

  render() {
    return (
      <div>
        {this.props.isVisible && this.state.isVisible && (
          <form>
            <input
              type="text"
              value={this.state.link}
              placeholder="Add Article"
              onChange={this.setLink}
            />
            <input type="submit" value="Add" onClick={this.addArticleHandler} />
          </form>
        )}
        {/*<button onClick={this.hideArticleForm}>Hide</button>*/}
      </div>
    );
  }
}
