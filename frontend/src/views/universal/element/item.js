import PropTyps from 'prop-types';
import React from 'react';

import './element.css';

function element({ data }) {
  return (
    <div className="e-item">
      <div>
        <strong className="t-line">
          <a href={data.url}>{data.title}</a>
        </strong>
        <ul className="r-ul">
          <li
            className="t-icons"
            style={{
              backgroundColor: 'blue',
            }}
          >
            {data.type}
          </li>
          <li>{data.author}</li>
          <li>{data.date}</li>
        </ul>
      </div>
      <strong>10</strong>
    </div>
  );
}

element.propTypes = {
  data: PropTyps.object.isRequired,
};

export default element;
