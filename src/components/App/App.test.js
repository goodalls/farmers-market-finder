import React from 'react';
import {App} from './App';
import {shallow} from 'enzyme';

describe('APP', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should start having a default state error array', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state('error')).toEqual([]);
  });

  
});

