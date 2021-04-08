import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${({ wide }) => (wide ? 50 : 25)}%;
  background-color: ${({ bgColor }) => bgColor || '#f99030'};
  color: #000;
  border: 1px solid #d1d5db;
  cursor: pointer;
  font-size: 24px;
  padding: 0;
  margin: 0;

  &:focus:not([data-focus-visible-added]) {
    outline: none;
  }
`;

export default function Button({
  name, clickHandle, wide, bgColor,
}) {
  return (
    <StyledButton
      data-testid="button"
      type="button"
      onClick={() => clickHandle(name)}
      wide={wide}
      bgColor={bgColor}
    >
      {name}
    </StyledButton>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandle: PropTypes.func.isRequired,
  wide: PropTypes.bool,
  bgColor: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  bgColor: '#f99030',
};
