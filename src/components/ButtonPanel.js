import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Row = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;

class ButtonPanel extends React.Component {
  clickHandler(n) {
    const { clickHandle } = this.props;
    clickHandle(n);
  }

  renderButton(n, wide, bgColor) {
    return (
      <Button
        name={n}
        clickHandle={(n) => this.clickHandler(n)}
        wide={wide}
        bgColor={bgColor}
      />
    );
  }

  render() {
    return (
      <div data-testid="button-panel">
        <Row>
          {this.renderButton('AC', false, '#e0e0e0')}
          {this.renderButton('+/-', false, '#e0e0e0')}
          {this.renderButton('%', false, '#e0e0e0')}
          {this.renderButton('÷', false, '#f99030')}
        </Row>
        <Row>
          {this.renderButton('7', false, '#e0e0e0')}
          {this.renderButton('8', false, '#e0e0e0')}
          {this.renderButton('9', false, '#e0e0e0')}
          {this.renderButton('x', false, '#f99030')}
        </Row>
        <Row>
          {this.renderButton('4', false, '#e0e0e0')}
          {this.renderButton('5', false, '#e0e0e0')}
          {this.renderButton('6', false, '#e0e0e0')}
          {this.renderButton('-', false, '#f99030')}
        </Row>
        <Row>
          {this.renderButton('1', false, '#e0e0e0')}
          {this.renderButton('2', false, '#e0e0e0')}
          {this.renderButton('3', false, '#e0e0e0')}
          {this.renderButton('+', false, '#f99030')}
        </Row>
        <Row>
          {this.renderButton('0', true, '#e0e0e0')}
          {this.renderButton('.', false, '#e0e0e0')}
          {this.renderButton('=', false, '#f99030')}
        </Row>
      </div>
    );
  }
}

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandle: PropTypes.func.isRequired,
};
