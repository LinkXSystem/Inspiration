import React, { Component } from 'react';
import './thumbnail.css';

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="code">
        <div className="code-item">
          <div className="item-header">
            <img
              src="https://avatars1.githubusercontent.com/u/170270?v=4"
              alt=""
            />
            <h4>sindresorhus/on-change</h4>
          </div>
          <div className="item-descri">
            Watch an object or array for changes
          </div>
          <div className="item-footer">
            <span>
              <i className="fa fa-star" aria-hidden="true" /> 1,119
            </span>
            <span>
              <i className="fa fa-code-fork" aria-hidden="true" /> 34
            </span>
            <span>
              <i className="fa fa-globe" aria-hidden="true" /> JavaScript
            </span>
            <span>
              <i className="fa fa-clock-o" aria-hidden="true" /> 25天前
            </span>
          </div>
        </div>
        <div className="code-item">
          <div className="item-header">
            <img
              src="https://avatars1.githubusercontent.com/u/170270?v=4"
              alt=""
            />
            <h4>sindresorhus/on-change</h4>
          </div>
          <div className="item-descri">
            Watch an object or array for changes
          </div>
          <div className="item-footer">
            <span>
              <i className="fa fa-star" aria-hidden="true" /> 1,119
            </span>
            <span>
              <i className="fa fa-code-fork" aria-hidden="true" /> 34
            </span>
            <span>
              <i className="fa fa-globe" aria-hidden="true" /> JavaScript
            </span>
            <span>
              <i className="fa fa-clock-o" aria-hidden="true" /> 25天前
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Code;
