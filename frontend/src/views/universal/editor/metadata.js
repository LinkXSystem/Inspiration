import React from 'react';

const info = () => (
  <div className="meta">
    <div className="title">
      <i className="inspiration-title" aria-hidden="true" />
      <input type="text" placeholder="标题" />
    </div>
    <div className="type">
      <i className="inspiration-type" aria-hidden="true" />
      <input type="text" placeholder="类型" />
    </div>
  </div>
);

export default info;
