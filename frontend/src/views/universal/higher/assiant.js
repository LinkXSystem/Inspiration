import React, { Component } from 'react';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sign, click, children } = this.props;
    return (
      <div
        ref={entity => {
          this.assiant = entity;
        }}
        sign={sign}
        onClick={() => {
          click(this.assiant);
        }}
      >
        {children}
      </div>
    );
  }
}

export default Instance;
