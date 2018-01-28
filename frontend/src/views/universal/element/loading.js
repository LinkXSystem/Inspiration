import React from 'react';

import './element.css';

const element = () => {
  /* eslint-disable global-require */
  const img = require('../../public/imgs/animation.png');
  /* eslint-disable global-require */
  return (
    <div className="link-loading">
      <img src={img} alt="" />
    </div>
  );
};

export default element;
