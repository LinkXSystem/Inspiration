import PropTyps from 'prop-types';
import React from 'react';

const element = ({ data }) => (
  <div className="image">
    <img src={data.img} alt="" />
    <span>{data.info}</span>
  </div>
);

element.propTypes = {
  data: PropTyps.object.isRequired,
};

export default element;
