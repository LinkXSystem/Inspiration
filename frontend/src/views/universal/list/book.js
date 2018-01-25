import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BookThumbnail } from '../thumbnail';

import './list.css';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <div className="l-book">
        {data.map(item => <BookThumbnail key={item.name} data={item} />)}
      </div>
    );
  }
}

Instance.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Instance;
