import PropTyps from 'prop-types';
import React from 'react';

const element = ({ data }) => (
  <div className="image">
    <img src={data.img} alt="" />
    <div>
      <span>
        <i className="fa fa-file-text" aria-hidden="true" /> {data.info}
      </span>
    </div>
  </div>
);

element.propTypes = {
  data: PropTyps.object.isRequired,
};

export default element;
