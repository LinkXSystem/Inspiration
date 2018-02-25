import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imagesloaded from 'imagesloaded';

import { Flat } from '../higher';
import { Image } from '../element';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: props.data.map(item => <Image key={item.img} data={item} />),
      heights: [],
    };
    this.build = this.build.bind(this);
  }

  componentDidMount() {
    const load = imagesloaded(this.list);
    load.on('done', this.build);
  }

  build() {
    const images = this.list.getElementsByClassName('image');
    const width = this.list.offsetWidth;
    const cols = Math.floor(width / 182);

    const { data } = this.props;

    const heights = [];
    const html = [];

    for (let i = 0; i < cols; i += 1) {
      html[i] = [];
    }

    for (let i = 0; i < images.length; i += 1) {
      const height = images[i].offsetHeight;
      if (i < cols) {
        heights.push(height);
        html[i].push(<Image key={i} data={data[i]} />);
      } else {
        const min = Math.min.apply(this, heights);

        let index = 0;

        for (let j = 0; j < heights.length; j += 1) {
          if (heights[j] === min) index = j;
        }

        html[index].push(<Image key={i} data={data[i]} />);

        heights[index] += height;
      }
    }

    Object.assign(this.list.style, {
      height: 'auto',
      display: 'flex',
      'justify-content': 'space-between',
    });

    this.setState({
      heights: heights,
      cache: html,
      html: html.map((item, i) => <Flat key={i} data={item} />),
    });
  }

  render() {
    return (
      <div
        className="picture-list"
        ref={element => {
          this.list = element;
        }}
      >
        {this.state.html}
        <div className="control">
          <button>更多</button>
        </div>
      </div>
    );
  }
}

Instance.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Instance;
