import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';

import { Markdown } from '../higher';

const color = {
  shell: '#89e051',
  css: '#563d7c',
  html: '#e34c26',
  'c++': '#f34b7d',
  javascript: '#f1e05a',
  typescript: '#2b7489',
  coffeescript: '#244776',
};

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: undefined,
      content: undefined,
    };
    this.build = this.build.bind(this);
    this.sight = this.sight.bind(this);
  }

  componentWillMount() {
    this.build();
  }

  async build() {
    const { data } = this.props;
    const read = await axios.get(`${data.url}/readme`);
    const type = await axios.get(data.languages_url);
    const number = Object.values(type.data);
    let count = 0;
    number.forEach(num => {
      count += num;
    });
    this.setState({
      data: type.data,
      count: count,
      content: read.data.content,
    });
  }

  sight() {
    const { data, count } = this.state;
    if (!data) return <span className="empty" />;
    const key = Object.keys(data);
    return key.map(item => {
      const ratio = data[item] / count * 100;
      return (
        <span
          key={item}
          style={{
            width: `${ratio}%`,
            backgroundColor: color[_.toLower(item)],
          }}
        />
      );
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div className="project-reader">
        <header>
          <div>
            <img src={data.owner.avatar_url} alt="" />
            <h4>
              <a href={data.html_url}>{data.name}</a>{' '}
            </h4>
          </div>
          <span className="inspiration-collection" />
        </header>
        <div className="sight">{this.sight()}</div>
        {this.state.content ? (
          <Markdown data={window.atob(this.state.content)} />
        ) : (
          <div>Test</div>
        )}
      </div>
    );
  }
}

Instance.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Instance;
