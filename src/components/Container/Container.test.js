import React from 'react';
import Container from './Container';
import {shallow} from 'enzyme';

describe('CONTAINER', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Container/>);
    expect(wrapper).toMatchSnapshot();
  });
});
