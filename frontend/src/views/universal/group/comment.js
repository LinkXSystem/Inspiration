import React, { Component } from 'react';
import { Comment } from '../element';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="comment-list">
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default Instance;
