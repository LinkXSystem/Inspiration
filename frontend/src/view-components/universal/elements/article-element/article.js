import React from 'react';
import PropTyps from 'prop-types';

import builder from '../../../../utils';

import './element.css';

const element = props => (
  <div className={builder.classname(['t-container', 'e-article'])}>
    <span className={builder.classname(['t-title'])}>
      <a href={props.data.url}>{props.data.title}</a>
    </span>
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
);

element.propTypes = {
  data: PropTyps.object.isRequired,
};

export default element;
