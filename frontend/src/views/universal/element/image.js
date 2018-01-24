import PropTyps from 'prop-types';
import React from 'react';
// import builder from '../../../utils';

import './element.css';

function element(props) {
  const { data } = props;
  return (
    <div className="e-image">
      <img src={data.img} alt="" />
      <div>
        <span>
          <i className="fa fa-file-text" aria-hidden="true" /> {data.info}
        </span>
      </div>
    </div>
  );
}

element.propTypes = {
  data: PropTyps.object.isRequired,
};

export default element;
