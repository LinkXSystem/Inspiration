import React, { Component } from 'react';
import PropTyps from 'prop-types';
import { Item } from '../../element';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const html = this.props.data.map(item => (
      <Item key={item.info} data={item} />
    ));
    return <div>{html}</div>;
  }
}

Wall.propTypes = {
  data: PropTyps.array.isRequired,
};

export default Wall;
