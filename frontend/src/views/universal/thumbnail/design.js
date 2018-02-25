import React, { Component } from 'react';

class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="design-thumbnail"
        style={{
          backgroundImage:
            'url(https://hbimg.b0.upaiyun.com/fa263e2d38d4438684807f8217dd5d56b45528682a1e4d-vqSn16)',
        }}
      >
        <div className="works">
          <ul>
            <li>
              <i className="fa fa-info-circle" aria-hidden="true" />
              <span>LinkSystem & 灵感</span>
            </li>
            <li>
              <i className="fa fa-fire" aria-hidden="true" />
              <span>恒之泳</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Design;
