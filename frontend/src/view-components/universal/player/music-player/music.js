import React, { Component } from 'react';
import './player.css';

class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="audio">
        <div className="song">
          <h5>
            <i className="fa fa-music" aria-hidden="true" /> 聆听声音
          </h5>
          <span>
            <em>00:12</em> / 03:26
          </span>
        </div>
        <div className="controls">
          <i className="fa fa-pause" aria-hidden="true" />
        </div>
        <div className="progress">
          <div className="progress-bar" />
        </div>
      </div>
    );
  }
}

export default Audio;
