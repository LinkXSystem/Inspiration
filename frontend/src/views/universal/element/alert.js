import React from 'react';
import PropTyps from 'prop-types';

import './element.css';

const element = ({ data }) => (
  <div
    className="link-alart"
    style={{
      right: data.statu ? '0px' : '-250px',
    }}
  >
    <div>{data.message}</div>
  </div>
);

element.propTypes = {
  data: PropTyps.object.isRequired,
};

export default element;
