import React, { Component } from 'react';
import './carousel.css';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          index: 1,
          context: 'link',
        },
        {
          index: 2,
          context: 'link',
        },
        {
          index: 3,
          context: 'link',
        },
        {
          index: 4,
          context: 'link',
        },
        {
          index: 5,
          context: 'link',
        },
      ],
      core: 10,
      action: false,
      mouse: {},
    };
    this.update = this.update.bind(this);
  }

  update(dom) {
    const real = dom.target;
    real.style['z-index'] = this.state.core + 1;
    this.setState({
      core: this.state.core + 1,
    });
  }

  rollup() {}

  render() {
    const { data } = this.state;
    return (
      <div className="c-action">
        {data.map(item => (
          <div
            key={item.index}
            onClick={dom => {
              this.update(dom);
            }}
            onMouseDown={dom => {
              this.setState({
                action: true,
                mouse: {
                  x: dom.nativeEvent.clientX,
                  y: dom.nativeEvent.clientY,
                },
              });
            }}
            onMouseUp={() => {
              this.setState({
                action: false,
                mouse: {},
              });
            }}
            onMouseLeave={() => {
              this.setState({
                action: false,
                mouse: {},
              });
            }}
            onMouseMove={dom => {
              if (!this.state.action) return;
              const real = dom.target;
              const x =
                real.offsetLeft +
                (dom.nativeEvent.clientX - this.state.mouse.x);
              const y =
                real.offsetTop + (dom.nativeEvent.clientY - this.state.mouse.y);
              const i = window.getComputedStyle(real.offsetParent);
              const j = window.getComputedStyle(real);
              const areax = parseInt(i.width) - parseInt(j.width);
              const areay = parseInt(i.height) - parseInt(j.height);
              console.log(x, areax, y, areay);
              this.setState({
                mouse: {
                  x: dom.nativeEvent.clientX,
                  y: dom.nativeEvent.clientY,
                },
              });
              real.style.top = `${
                y >= 0 && y <= areay ? y : dom.target.offsetTop
              }px`;
              real.style.left = `${
                x >= 0 && x <= areax ? x : dom.target.offsetLeft
              }px`;
            }}
          >
            {item.context}
          </div>
        ))}
      </div>
    );
  }
}

export default Instance;
