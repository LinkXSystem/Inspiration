import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.props.data}</div>;
  }
}

Instance.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Instance;
