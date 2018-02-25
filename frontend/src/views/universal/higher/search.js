import React, { Component } from 'react';

import { Input } from '../element';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="search">
        <div>
          <Input placeholder="搜索" change={() => {}} />
          <i className="inspiration-search" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default Instance;
