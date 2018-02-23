import React from 'react';
import { MapContainer } from './MapContainer';
import { shallow } from 'enzyme';

describe('MAP_CONTAINER', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<MapContainer google={{maps: {}}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
