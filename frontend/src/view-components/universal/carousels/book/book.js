import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './carousel.css';

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
    };
    this.update = this.update.bind(this);
    this.rollup = this.rollup.bind(this);
  }

  componentDidMount() {
    const { children } = this.carousel;
    const { transfrom } = this.state;
    transfrom.forEach((item, i) => {
      children[i].style.transform = item;
    });
    this.clock = setInterval(this.rollup, 10000);
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

  update(dom) {
    const element = dom.target;
    console.log(element.getAttribute('sign'));
    // element.style.transform = 'translateX(0px) translateZ(150px) rotateY(0deg)';
  }

  rollup() {
    const { transfrom } = this.state;
    const style = transfrom.shift();
    transfrom.push(style);
    const cache = transfrom.map(item => item);
    this.setState({
      transfrom: cache,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div
        ref={item => {
          this.carousel = item;
        }}
        className="c-book"
      >
        {children.map((item, i) =>
          React.cloneElement(item, {
            key: i,
            onClick: this.update,
            sign: 'test',
          }),
        )}
      </div>
    );
  }
}

Instance.prototypes = {
  children: Proptypes.array.isRequired,
};
export default Instance;
