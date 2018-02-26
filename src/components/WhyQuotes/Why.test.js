import React from 'react';
import {Why, mapStateToProps, mapDispatchToProps} from './Why';
import { shallow } from 'enzyme';

describe('WHY', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Why why={({})} populateWhyObject={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('MSTP and MDTP', () => {
    it('should map why to props', () => {
      const mockState = {
        why: {}
      };
      const mapped = mapStateToProps(mockState);
      expect(mapped.why).toEqual({});
    });

    it('should call dispatch on populateWhyObject', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.populateWhyObject();
      expect(mockDispatch).toHaveBeenCalled();
    });

  })
  
});
