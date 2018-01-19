import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BookThumbnail } from '../thumbnails';

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
  data: PropTypes.array.isRequired,
};

export default Instance;
