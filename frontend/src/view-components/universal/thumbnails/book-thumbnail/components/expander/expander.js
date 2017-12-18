import React, { Component } from 'react';
import './expander.css';

class Expander extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { description } = this.props;
    return (
      <div className="expander">
        <span>描述：{description}</span>
        <div className="madol">
          <h4>书籍简介</h4>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Expander;
