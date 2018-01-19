import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: false,
      area: {},
      mouse: {},
      parent: undefined,
    };
    this.build = this.build.bind(this);
    this.down = this.down.bind(this);
    this.stop = this.stop.bind(this);
    this.random = this.random.bind(this);
    this.runout = this.runout.bind(this);
    this.wrapup = this.wrapup.bind(this);
  }

  componentDidMount() {
    const { type } = this.props;
    switch (type) {
      case 'runout':
      case 'wrapup':
        this.build();
        break;
      default:
        break;
    }
  }

  build() {
    const parent = window.getComputedStyle(this.darg.offsetParent);
    const owner = window.getComputedStyle(this.darg);
    const area = {
      i: parseInt(parent.width, 10),
      j: parseInt(parent.height, 10),
      x: parseInt(parent.width, 10) - parseInt(owner.width, 10),
      y: parseInt(parent.height, 10) - parseInt(owner.height, 10),
    };
    this.setState({
      area: area,
      parent: parent,
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

  move(dom) {
    const { type } = this.props;
    switch (type) {
      case 'runout':
        this.runout(dom);
        break;
      case 'wrapup':
        this.wrapup(dom);
        break;
      default:
        this.random(dom);
        break;
    }
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

  runout(dom) {
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
      y >= -this.state.area.j && y <= this.state.area.j ? y : element.offsetTop
    }px`;
    element.style.left = `${
      x >= -this.state.area.i && x <= this.state.area.i ? x : element.offsetLeft
    }px`;
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
      y >= 1 && y <= this.state.area.y - 1 ? y : element.offsetTop
    }px`;
    element.style.left = `${
      x >= 1 && x <= this.state.area.x - 1 ? x : element.offsetLeft
    }px`;
  }

  render() {
    const { click, children } = this.props;
    return (
      <div
        style={{
          position: 'absolute',
          userSelect: 'none',
        }}
        ref={item => {
          this.darg = item;
        }}
        onClick={dom => click(dom)}
        onMouseDown={this.down}
        onMouseUp={this.stop}
        onMouseLeave={this.stop}
        onMouseMove={dom => this.move(dom)}
      >
        {children}
      </div>
    );
  }
}

Instance.propTypes = {
  children: PropTypes.any.isRequired,
  click: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Instance;
