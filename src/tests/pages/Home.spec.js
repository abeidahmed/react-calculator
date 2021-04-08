import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../pages/Home';

describe('Home', () => {
  test('renders home page', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
