import PropTyps from 'prop-types';
import React from 'react';

const element = ({ name, url }) => (
  <blockquote className="blockquote">
    <a href={url}>{name}</a>{' '}
  </blockquote>
);

element.propTypes = {
  name: PropTyps.string.isRequired,
  url: PropTyps.string.isRequired,
};

export default element;
