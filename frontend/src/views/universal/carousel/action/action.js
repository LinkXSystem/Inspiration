import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drag } from '../../higher';
import './carousel.css';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      core: 10,
      children: [],
    };
    this.init = this.init.bind(this);
    this.update = this.update.bind(this);
    this.rollup = this.rollup.bind(this);
    this.change = this.change.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  init() {
    const { children } = this.carousel;
    const { core } = this.state;
    const { time } = this.props;
    children[0].style['z-index'] = core;
    children[1].style['z-index'] = core - 1;
    this.setState({
      children: children,
    });
    this.clock = setInterval(this.rollup, time);
  }

  update(target) {
    if (!target) return;

    const { style } = target;

    style['z-index'] = this.state.core + 1;
    this.setState({
      core: this.state.core + 1,
    });
  }

  rollup() {
    const numc = Math.floor(Math.random() * this.props.children.length);
    const { children, core } = this.state;
    children[numc].style['z-index'] = core + 1;
    this.setState({
      core: core + 1,
    });
  }

  change(state) {
    this.setState(state);
  }

  render() {
    const { children } = this.props;
    return (
      <div
        className="c-action"
        ref={item => {
          this.carousel = item;
        }}
      >
        {children.map((item, index) => (
          <Drag key={index} type="runout" click={this.update}>
            {item}
          </Drag>
        ))}
      </div>
    );
  }
}

Instance.propTypes = {
  time: PropTypes.number.isRequired,
  children: PropTypes.array.isRequired,
};

export default Instance;
