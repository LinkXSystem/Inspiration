import React, { Component } from 'react';
import './foots.css';

class FootNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>{' '}
        <small>
          Someone famous <cite>Source Title</cite>
        </small>
      </blockquote>
    );
  }
}

export default FootNote;
