import React, { Component } from 'react';
import './player.css';
import builder from '../../../../utils/classname';

class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false,
      time: '0',
    };
    this.play = this.play.bind(this);
  }

  play() {
    const music = document.getElementById('music-source');
    let clock;
    if (!this.state.switch) {
      this.setState({
        switch: !this.state.switch,
      });
      music.play();
      clock = setInterval(() => {
        this.setState({
          time: music.currentTime,
        });
      }, 1000);
    } else {
      this.setState({
        switch: !this.state.switch,
      });
      music.pause();
      clearInterval(clock);
    }
  }

  render() {
    return (
      <div className={builder.build(['t-container', 'audio'])}>
        <div className="song">
          <audio
            id="music-source"
            src={require('./carefree.mp3')}
            style={{
              display: 'hidden',
            }}
          />
          <h5>
            <i className="fa fa-music" aria-hidden="true" /> 聆听声音
          </h5>
          <span>
            <em>{this.state.time}</em> / 03:26
          </span>
        </div>
        <div className="controls">
          {this.state.switch ? (
            <i className="fa fa-pause" aria-hidden="true" onClick={this.play} />
          ) : (
            <i className="fa fa-play" aria-hidden="true" onClick={this.play} />
          )}
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: '2%' }} />
        </div>
      </div>
    );
  }
}

export default Audio;
