import React from 'react';
import PropTyps from 'prop-types';

import './element.css';

const element = props => (
  <div className="e-image">
    <img src={props.data.img} alt="" />
    <div>
      <span>
        <i className="fa fa-file-text" aria-hidden="true" /> {props.data.info}
      </span>
    </div>
  </div>
);

element.propTypes = {
  data: PropTyps.object.isRequired,
};

export default element;
