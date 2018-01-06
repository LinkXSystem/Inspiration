import React, { Component } from 'react';

import './wall.css';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="photo-wall">
        <div className="model-left">
          <div />
          <div>
            <div />
            <div />
          </div>
          <div />
          <div />
          <div />
        </div>
        <div className="model-center">
          <div />
          <div />
          <div />
          <div />
          <div>
            <div />
            <div />
          </div>
        </div>
        <div className="model-right">
          <div>
            <div />
            <div />
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Wall;
