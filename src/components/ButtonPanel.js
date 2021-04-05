import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {
  clickHandler(n) {
    const { clickHandle } = this.props;
    clickHandle(n);
  }

  renderButton(n) {
    return <Button name={n} clickHandle={(n) => this.clickHandler(n)} />;
  }

  render() {
    return (
      <div>
        <div>
          {this.renderButton('AC')}
          {this.renderButton('+/-')}
          {this.renderButton('%')}
          {this.renderButton('÷')}
        </div>
        <div>
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('x')}
        </div>
        <div>
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-')}
        </div>
        <div>
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('+')}
        </div>
        <div>
          {this.renderButton('0')}
          {this.renderButton('.')}
          {this.renderButton('=')}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandle: PropTypes.func.isRequired,
};
