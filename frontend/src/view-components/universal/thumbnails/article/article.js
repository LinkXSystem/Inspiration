import React, { Component } from 'react';
import PropTyps from 'prop-types';
import './thumbnail.css';
import builder from '../../../../utils';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.underline();
    window.addEventListener('resize', this.underline);
  }

  underline() {
    const element = document.getElementsByClassName('underline')[0];

    if (element.children[0]) {
      element.removeChild(element.children[0]);
    }

    const style = document.defaultView.getComputedStyle(element);
    const width = element.clientWidth;
    const heigth = element.scrollHeight;
    const line = Math.floor(parseFloat(style.lineHeight));

    const canvas = document.createElement('canvas');

    canvas.width = width;
    canvas.height = heigth;

    document.getElementsByClassName('underline')[0].appendChild(canvas);

    const ctx = canvas.getContext('2d');

    const count = Math.floor(heigth / line);

    for (let i = 1; i < count; i += 1) {
      ctx.beginPath();
      ctx.moveTo(1, line * i);
      ctx.lineTo(width - 1, line * i);
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#eeeeee';
      ctx.stroke();
      ctx.closePath();
    }
  }

  render() {
    return (
      <div
        className={builder.classname([
          't-container',
          'typesetting',
          'th-article',
        ])}
      >
        <h4 className={builder.classname(['t-line'])}>
          <i className="fa fa-file-text" aria-hidden="true" />{' '}
          {this.props.data.title}
        </h4>
        <p className={builder.classname(['underline'])}>
          {this.props.data.content}
        </p>
      </div>
    );
  }
}

Article.propTypes = {
  data: PropTyps.object.isRequired,
};

export default Article;
