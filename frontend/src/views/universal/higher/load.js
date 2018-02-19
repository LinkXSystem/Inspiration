import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.darw = this.darw.bind(this);
  }

  componentDidMount() {
    this.darw();
  }

  darw() {
    const { width, height } = window.getComputedStyle(this.element);

    const canvas = this.element;
    canvas.width = parseInt(width, 10);
    canvas.height = parseInt(height, 10);

    const context = canvas.getContext('2d');

    let flag = true;
    let x = 0;
    let y = canvas.height / 2;

    function setup() {
      context.save();
      context.beginPath();
      const rect = context.createLinearGradient(
        0,
        canvas.height - 200,
        0,
        canvas.height,
      );

      rect.addColorStop(0, '#ffffff');
      rect.addColorStop(1, '#bfbfbf');

      context.fillStyle = rect;
      context.rect(0, canvas.height - 200, canvas.width, canvas.height);
      context.fill();
      context.closePath();

      context.restore();
      context.save();
      context.font = '25px serif';
      context.textAlign = 'center';
      context.fillStyle = '#fff';
      context.fillText('loding...', canvas.width / 2, canvas.height - 40);

      const line = context.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height / 2,
      );
      for (let i = 0; i < 5; i += 1) {
        line.addColorStop(
          0.2 * i,
          `rgb(
            ${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)})`,
        );
      }
      context.strokeStyle = line;
      context.lineJoin = 'round';
      context.lineWidth = 3;
      context.beginPath();
      context.moveTo(x, y);
    }

    function moves() {
      x += 5;
      if (x >= 50 && x < canvas.width - 50) {
        const z = Math.random() * canvas.height;
        if (y <= z) flag = true;
        if (canvas.height - y <= z) flag = false;
        y += flag ? 30 : -30;
      }
      context.lineTo(x, y);
      context.stroke();
    }

    function animation() {
      window.requestAnimationFrame(animation, context);

      if (x > canvas.width) {
        context.closePath();
        context.clearRect(0, 0, canvas.width, canvas.height);
        flag = true;
        x = 0;
        y = canvas.height / 2;
        setup();
      }

      moves();
    }

    setup();
    animation();
  }

  render() {
    const { width, height } = this.props;
    return (
      <canvas
        className="t-container"
        style={{
          height: height,
          width: width,
          display: 'block',
        }}
        ref={entity => {
          this.element = entity;
        }}
      />
    );
  }
}

Instance.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Instance;
