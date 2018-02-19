import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from '../higher';
import { Evaluate } from '../element';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return <List name="evaluate-list" data={data} component={Evaluate} />;
  }
}

Instance.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Instance;
