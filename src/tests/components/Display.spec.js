import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../../components/Display';

describe('Display', () => {
  it('result has 0 as default props', () => {
    render(<Display input="42" />);

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('result can be overridden', () => {
    render(<Display result="9" input="42" />);

    expect(screen.getByText('9')).toBeInTheDocument();
  });

  it('input is shown', () => {
    render(<Display input="42" />);

    expect(screen.getByText('42')).toBeInTheDocument();
  });
});
