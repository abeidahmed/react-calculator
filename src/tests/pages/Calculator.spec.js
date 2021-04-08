import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../../pages/Calculator';

describe('Calculator', () => {
  test('renders home page', () => {
    const component = renderer.create(<Calculator />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
