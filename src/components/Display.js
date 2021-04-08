import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DisplayContainer = styled.div`
  background-color: gray;
  color: #fff;
  padding: 8px 24px;
  text-align: right;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Para = styled.p`
  font-size: ${({ fontSize }) => fontSize || 20}px;
  margin: 0;
`;

export default function Display({ result, input }) {
  return (
    <DisplayContainer>
      <Para>{input}</Para>
      <Para fontSize={42}>{result}</Para>
    </DisplayContainer>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  input: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: '0',
};
