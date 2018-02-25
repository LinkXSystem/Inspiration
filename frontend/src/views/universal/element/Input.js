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

const element = ({ change, delay, type, placeholder }) => (
  <input
    onChange={debounce(change, delay)}
    type={type}
    placeholder={placeholder}
  />
);

element.defaultProps = {
  type: 'text',
  delay: 500,
  placeholder: '',
};

element.propTypes = {
  change: PropTypes.func.isRequired,
  delay: PropTypes.number,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default element;
