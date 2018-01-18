import PropTyps from 'prop-types';
import React from 'react';
import builder from '../../../utils';

import './element.css';

function element(props) {
  const { data } = props;
  return (
    <div className={builder.classname(['e-item'])}>
      <div>
        <strong className={builder.classname(['t-line'])}>
          <a href={data.url}>{data.title}</a>
        </strong>
        <ul className={builder.classname(['r-ul'])}>
          <li
            className={builder.classname(['t-icons'])}
            style={{
              backgroundColor: 'blue',
            }}
          >
            {props.data.type}
          </li>
          <li>{props.data.author}</li>
          <li>{props.data.date}</li>
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
