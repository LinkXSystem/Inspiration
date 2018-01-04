import React from 'react';
import PropTyps from 'prop-types';

import builder from '../../../../utils/classname';

import './element.css';

const element = props => (
  <div className={builder.build(['t-container', 'e-article'])}>
    <span className={builder.build(['t-title'])}>
      <a href={props.data.url}>{props.data.title}</a>
    </span>
    <ul className={builder.build(['r-ul'])}>
      <li
        className={builder.build(['t-icons'])}
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
);

element.propTypes = {
  data: PropTyps.object.isRequired,
};

export default element;
