import React from 'react';

const element = () => (
  <div className="comment">
    <header>
      <img
        src={
          /* eslint-disable global-require */
          require('../../public/imgs/user.png')
          /* eslint-disable global-require */
        }
        alt=""
      />
      <h4>LinkSystem</h4>
    </header>
    <p>testing...</p>
  </div>
);

export default element;
