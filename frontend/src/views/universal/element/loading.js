import React from 'react';

const element = () => {
  /* eslint-disable global-require */
  const img = require('../../public/svgs/loding.svg');
  /* eslint-disable global-require */
  return (
    <div className="loading">
      <img src={img} alt="" />
    </div>
  );
};

export default element;
