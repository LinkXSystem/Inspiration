import PropTyps from 'prop-types';
import React from 'react';

const element = ({ name, url }) => (
  <blockquote className="blockquote">
    <span>{name}</span>
    <a href={url}>
      <i className="inspiration-more" aria-hidden="true" />
    </a>
  </blockquote>
);

element.propTypes = {
  name: PropTyps.string.isRequired,
  url: PropTyps.string.isRequired,
};

export default element;
