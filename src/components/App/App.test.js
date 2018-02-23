import React from 'react';
import {App, mapStateToProps, mapDispatchToProps} from './App';
import {shallow} from 'enzyme';

describe('APP', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should start having a default state error array', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state('error')).toEqual([]);
  });

  describe('MSTP and MDTP', () => {

    it('should map props from store', () => {
      const mockStore = {markets: [{}, {}]};
      const mapped = mapStateToProps(mockStore);
      const expected = [{}, {}];
      expect(mapped.markets).toEqual(expected);
    });
  });

  
});

