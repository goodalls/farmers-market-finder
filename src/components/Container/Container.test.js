import React from 'react';
import { Container, mapStateToProps, mapDispatchToProps } from './Container';
import { shallow } from 'enzyme';

describe('CONTAINER', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Container markets={[]} user={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('MSTP and MDTP', () => {
    it('should define props MARKETS', () => {
      const mockStore = {
        markets: [],
        user: { favorites: [] }
      };
      const expected = [];
      const mapped = mapStateToProps(mockStore);
      expect(mapped.markets).toEqual(expected);
    });

    it('should define props USER', () => {
      const mockStore = {
        markets: [],
        user: { favorites: [] }
      };
      const expected = [];
      const mapped = mapStateToProps(mockStore);
      expect(mapped.user).toEqual(expected);
    });

    it('should call dispatch on MARKETDETAILS', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.marketDetails();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
