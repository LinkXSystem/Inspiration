import React, { Component } from 'react';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="function-list">
        <ul>
          <li>
            <i className="inspiration-enjoy" />
          </li>
          <li>
            <i className="inspiration-enjoy" />
          </li>
          <li>
            <i className="inspiration-enjoy" />
          </li>
          <li>
            <i className="inspiration-enjoy" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Instance;
