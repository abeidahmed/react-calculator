import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result, input }) {
  return (
    <div>
      <p>{input}</p>
      <p>{result}</p>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  input: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: '0',
};
