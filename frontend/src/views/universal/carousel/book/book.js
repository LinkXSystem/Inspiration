import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './carousel.css';

import { Assiant } from '../../higher';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transfrom: [
        'translateX(-200px) translateZ(0px) rotateY(30deg)',
        'translateX(-125px) translateZ(0px) rotateY(30deg)',
        'translateX(0px) translateZ(125px) rotateY(0deg)',
        'translateX(125px) translateZ(0px) rotateY(-30deg)',
        'translateX(200px) translateZ(0px) rotateY(-30deg)',
      ],
      core: 2,
    };
    this.update = this.update.bind(this);
    this.rollup = this.rollup.bind(this);
  }

  componentDidMount() {
    const { children } = this.carousel;
    const { transfrom } = this.state;
    const { time } = this.props;
    transfrom.forEach((item, i) => {
      children[i].style.transform = item;
    });
    this.clock = setInterval(this.rollup, time);
  }

  componentDidUpdate() {
    const { children } = this.carousel;
    const { transfrom } = this.state;
    transfrom.forEach((item, i) => {
      children[i].style.transform = item;
    });
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  update(target) {
    const { core, transfrom } = this.state;
    const element = target;
    const index = parseInt(element.getAttribute('sign'), 10);
    if (index === core) return;
    const { length } = transfrom;
    const cache = [];
    cache[index - 2 >= 0 ? index - 2 : length + index - 2] =
      'translateX(-200px) translateZ(0px) rotateY(30deg)';
    cache[index - 1 >= 0 ? index - 1 : length + index - 1] =
      'translateX(-125px) translateZ(0px) rotateY(30deg)';
    cache[index] = 'translateX(0px) translateZ(150px) rotateY(0deg)';
    cache[index + 1 >= length ? index + 1 - length : index + 1] =
      'translateX(125px) translateZ(0px) rotateY(-30deg)';
    cache[index + 2 >= length ? index + 2 - length : index + 2] =
      'translateX(200px) translateZ(0px) rotateY(-30deg)';
    this.setState({
      transfrom: cache,
      core: index,
    });
  }

  rollup() {
    const { transfrom, core } = this.state;
    const style = transfrom.shift();
    transfrom.push(style);
    const cache = transfrom.map(item => item);
    const index =
      core + 1 >= transfrom.length ? core + 1 - transfrom.length : core + 1;
    this.setState({
      transfrom: cache,
      core: index,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div
        ref={item => {
          this.carousel = item;
        }}
        className="c-book t-container"
      >
        {' '}
        {children.map((item, i) => (
          <Assiant key={i} sign={i} click={this.update}>
            {item}
          </Assiant>
        ))}{' '}
      </div>
    );
  }
}

Instance.prototypes = {
  children: PropTypes.array.isRequired,
  time: PropTypes.number.isRequired,
};

export default Instance;
