import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../pages/Quote';

describe('Quote', () => {
  test('renders home page', () => {
    const component = renderer.create(<Quote />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
