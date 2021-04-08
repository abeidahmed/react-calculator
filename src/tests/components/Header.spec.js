import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../components/Header';

describe('Header', () => {
  it('renders the component', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const header = screen.getByTestId('header');

    expect(header).toHaveTextContent(/Math Magician/);
  });

  it('header component has the links', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const header = screen.getByTestId('header');

    expect(header).toHaveTextContent('Home');
    expect(header).toHaveTextContent('Calculator');
    expect(header).toHaveTextContent('Quote');
  });
});
