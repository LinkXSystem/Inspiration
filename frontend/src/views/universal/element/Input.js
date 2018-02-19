import React from 'react';
import PropTypes from 'prop-types';

const debounce = (fn, delay) => {
  let timer = null;

  return dom => {
    const context = this;
    Object.assign(context, { target: dom.target });

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, [context.target]);
    }, delay);
  };
};

const element = ({ change, delay }) => (
  <input type="text" onChange={debounce(change, delay)} />
);

element.propTypes = {
  change: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired,
};

export default element;
