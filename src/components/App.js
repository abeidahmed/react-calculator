import React from 'react';
import styled from 'styled-components';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Container = styled.div`
  width: 700px;
  margin: 48px auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(btnName) {
    this.setState((state) => calculate(state, btnName));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <Container>
        <Display result={total || '0'} input={next || '_'} />
        <ButtonPanel clickHandle={(btnName) => this.handleClick(btnName)} />
        <span style={{ display: 'none' }}>{operation}</span>
      </Container>
    );
  }
}

export default App;
