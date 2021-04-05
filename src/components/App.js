import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculateDataObj from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  handleClick(btnName) {
    const { calculate } = calculateDataObj;
    const obj = this.state;
    const calculatedObj = calculate(obj, btnName);
    this.setState({
      obj: { ...calculatedObj },
    });
  }

  render() {
    const { obj } = this.state;

    return (
      <div>
        <Display result={obj.total || obj.next || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
