import React from 'react';
import { App, mapStateToProps } from './App';
import { shallow } from 'enzyme';

describe('APP', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should start having a default state error array', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('error')).toEqual([]);
  });

  it('should have favorite', () => {
    // need to make test
  });

  describe('MSTP and MDTP', () => {
    it('should map props from store', () => {
      const mockStore = { markets: [{}, {}] };
      const mapped = mapStateToProps(mockStore);
      const expected = [{}, {}];
      expect(mapped.markets).toEqual(expected);
    });
  });
});
