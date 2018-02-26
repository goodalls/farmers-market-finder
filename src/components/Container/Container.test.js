import React from 'react';
import { Container, mapStateToProps, mapDispatchToProps } from './Container';
import {mockMarkets} from '../../__mocks__/mockData';
import * as api from '../../utilities/api';
import { shallow } from 'enzyme';

describe('CONTAINER', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Container markets={[]} user={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('markets', () => {
    it('should match snapshot with different market arrays', () => {
      const wrapper = shallow(<Container markets={mockMarkets} user={[]} marketDetails={jest.fn()} history={({push: jest.fn()})} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  
  describe('handleSingleMarket', () => {
    //most happy test! :)
    it('should call api.MarketDetails', () => {
      const wrapper = shallow(<Container markets={[]} user={[]} marketDetails={jest.fn()} history={({push: jest.fn()})} />);
      const mockEvent = {preventDefault: jest.fn()};
      const mockID = 32;
      api.marketDetails = jest.fn().mockReturnValue({marketdetails: ''});
      wrapper.instance().handleSingleMarket(mockEvent, mockID);
      expect(api.marketDetails).toHaveBeenCalledWith(mockID);
    });
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
