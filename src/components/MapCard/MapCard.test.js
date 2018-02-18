import React from 'react';
import MapCard from './MapCard';
import {shallow} from 'enzyme';

describe('MAPCARD', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<MapCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
