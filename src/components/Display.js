import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ name }) {
  return <div>{name}</div>;
}

Display.propTypes = {
  name: PropTypes.string,
};

Display.defaultProps = {
  name: '0',
};
