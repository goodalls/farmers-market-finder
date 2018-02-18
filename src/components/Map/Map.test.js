import React from 'react';
import Map from './Map';
import {shallow} from 'enzyme';

describe('MAP', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Map/>);
    expect(wrapper).toMatchSnapshot();
  });
});
