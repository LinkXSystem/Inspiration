import React, { Component } from 'react';
import './player.css';
import builder from '../../../../utils/';

class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: '00:00',
      time: '00:00',
      progress: '0',
      switch: false,
    };
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    const music = document.getElementById('music-source');
    music.src = require('./carefree.mp3');
    music.addEventListener('canplaythrough', () => {
      this.setState({
        duration: builder.time(music.duration),
      });
    });
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
          time: builder.time(music.currentTime),
          progress: music.currentTime * 100 / music.duration,
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
      <div className={builder.classname(['t-container', 'audio'])}>
        <div className="song">
          <audio
            id="music-source"
            style={{
              display: 'hidden',
            }}
          />
          <h5>
            <i className="fa fa-music" aria-hidden="true" /> 聆听声音
          </h5>
          <span>
            <em>{this.state.time}</em> / <em>{this.state.duration}</em>
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
          <div
            className="progress-bar"
            style={{ width: `${this.state.progress}%` }}
          />
        </div>
      </div>
    );
  }
}

export default Audio;
