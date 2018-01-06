import React, { Component } from 'react';
import PropTyps from 'prop-types';
import { Article } from '../../elements';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const html = this.props.data.map(item => (
      <Article key={item.info} data={item} />
    ));
    return <div>{html}</div>;
  }
}

Wall.propTypes = {
  data: PropTyps.array.isRequired,
};

export default Wall;
