import React, { Component } from 'react';
import './thumbnail.css';

class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="image">
        <div className="description">
          <h4>在海上冲浪的人，如风中晓燕！</h4>
        </div>
        <div className="works">
          <ul>
            <li>
              <i className="fa fa-user-circle" aria-hidden="true" />
              <span>LinkSystem</span>
            </li>
            <li>
              <i className="fa fa-info-circle" aria-hidden="true" />
              <span>LinkSystem & 灵感</span>
            </li>
            <li>
              <i className="fa fa-fire" aria-hidden="true" />
              <span>恒之泳</span>
            </li>
            <li>
              <i className="fa fa-calendar" aria-hidden="true" />
              <span>2017-12-15</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Design;
