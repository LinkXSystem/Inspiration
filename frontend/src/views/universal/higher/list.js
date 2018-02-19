import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { component: Entity, data, name } = this.props;
    return (
      <div className={name}>
        {data.map((item, index) => <Entity key={index} data={item} />)}
      </div>
    );
  }
}

Instance.propTypes = {
  component: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Instance;
