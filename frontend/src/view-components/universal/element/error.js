// import PropTyps from 'prop-types';
import React from 'react';
import builder from '../../../utils';

import './element.css';

const element = () => (
  <div className={builder.classname(['t-container', 'e-error'])} />
);

export default element;
