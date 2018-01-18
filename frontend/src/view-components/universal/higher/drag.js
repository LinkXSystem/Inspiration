import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: false,
      area: {},
      mouse: {},
    };
    this.build = this.build.bind(this);
    this.down = this.down.bind(this);
    this.stop = this.stop.bind(this);
    this.random = this.random.bind(this);
    this.wrapup = this.wrapup.bind(this);
  }

  componentDidMount() {
    const { random } = this.props;
    if (!random) this.build();
  }

  build() {
    const parent = window.getComputedStyle(this.darg.offsetParent);
    const owner = window.getComputedStyle(this.darg);
    const area = {
      x: parseInt(parent.width, 10) - parseInt(owner.width, 10),
      y: parseInt(parent.height, 10) - parseInt(owner.height, 10),
    };
    this.setState({
      area: area,
    });
  }

  down(dom) {
    const event = dom.nativeEvent;
    this.setState({
      action: true,
      mouse: {
        x: event.clientX,
        y: event.clientY,
      },
    });
  }

  stop() {
    this.setState({ action: false });
  }

  random(dom) {
    if (!this.state.action) return;
    const element = this.darg;
    const event = dom.nativeEvent;
    const x = element.offsetLeft + (event.clientX - this.state.mouse.x);
    const y = element.offsetTop + (event.clientY - this.state.mouse.y);
    this.setState({
      mouse: {
        x: event.clientX,
        y: event.clientY,
      },
    });
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
  }

  wrapup(dom) {
    if (!this.state.action) return;
    const element = this.darg;
    const event = dom.nativeEvent;
    const x = element.offsetLeft + (event.clientX - this.state.mouse.x);
    const y = element.offsetTop + (event.clientY - this.state.mouse.y);
    this.setState({
      mouse: {
        x: event.clientX,
        y: event.clientY,
      },
    });
    element.style.top = `${
      y >= 0 && y <= this.state.area.y ? y : element.offsetTop
    }px`;
    element.style.left = `${
      x >= 0 && x <= this.state.area.x ? x : element.offsetLeft
    }px`;
  }

  render() {
    const { random, children } = this.props;
    return (
      <div
        style={{
          position: 'absolute',
          userSelect: 'none',
        }}
        ref={item => {
          this.darg = item;
        }}
        onMouseDown={this.down}
        onMouseUp={this.stop}
        onMouseLeave={this.stop}
        onMouseMove={dom => (random ? this.random(dom) : this.wrapup(dom))}
      >
        {children}
      </div>
    );
  }
}

Instance.propTypes = {
  random: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Instance;
