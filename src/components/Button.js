import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, clickHandle }) {
  return (
    <button type="button" onClick={() => clickHandle(name)}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandle: PropTypes.func.isRequired,
};
