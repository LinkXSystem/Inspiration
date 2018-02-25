import React, { Component } from 'react';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div className="affix">
        <i className="inspiration-add" aria-hidden="true" />
        <div>{children}</div>
      </div>
    );
  }
}

export default Instance;
