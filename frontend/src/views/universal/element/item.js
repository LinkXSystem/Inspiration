import PropTyps from 'prop-types';
import React from 'react';

function element({ data }) {
  return (
    <div className="item">
      <div>
        <h4 className="t-line">
          <a href={data.url}>{data.title}</a>
        </h4>
        <ul>
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
