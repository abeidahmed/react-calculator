import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonPanel from '../../components/ButtonPanel';

describe('ButtonPanel', () => {
  it('renders the component', () => {
    render(<ButtonPanel name="Foo" clickHandle={() => {}} />);
    const buttonPanel = screen.getByTestId('button-panel');

    expect(buttonPanel).toHaveTextContent('AC+/-%÷789x456-123+0.=');
  });
});
