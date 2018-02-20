import React from 'react';
import Why from './Why';
import { shallow } from 'enzyme';

describe('WHY', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Why />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
