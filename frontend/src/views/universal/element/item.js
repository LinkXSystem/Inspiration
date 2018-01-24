import PropTyps from 'prop-types';
import React from 'react';
import { classname } from '../../../utils';

import './element.css';

function element(props) {
  const { data } = props;
  return (
    <div className={classname(['e-item'])}>
      <div>
        <strong className={classname(['t-line'])}>
          <a href={data.url}>{data.title}</a>
        </strong>
        <ul className={classname(['r-ul'])}>
          <li
            className={classname(['t-icons'])}
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
