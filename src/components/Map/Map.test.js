import React from 'react';
import { shallow } from 'enzyme';
import Map from './Map';

describe('MAP', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Map />);
    expect(wrapper).toMatchSnapshot();
  });
});
