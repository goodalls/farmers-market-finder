import React from 'react';
import Why from './Why';
import { shallow } from 'enzyme';

describe('WHY', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<Why />);
    // const random = jest.fn(() => 1);  
    expect(wrapper).toMatchSnapshot();
  });
});
