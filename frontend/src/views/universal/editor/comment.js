import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="comment-editor">
        <h4>评论</h4>
        <textarea name="comment" id="" cols="10" />
        <button>评论</button>
      </div>
    );
  }
}

export default Article;
