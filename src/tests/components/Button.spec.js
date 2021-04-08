import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/Button';

describe('Button', () => {
  it('renders the component', () => {
    render(<Button name="Foo" clickHandle={() => {}} />);
    const button = screen.getByTestId('button');

    expect(button).toHaveTextContent('Foo');
  });
});
