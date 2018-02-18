import React from 'react';
import {shallow} from 'enzyme';
import TextCard from './TextCard';

describe('TEXTCARD', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<TextCard/>);
    expect(wrapper).toMatchSnapshot();
  });
});
