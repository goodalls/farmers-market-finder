import React from 'react';
import { Control, mapDispatchToProps, mapStateToProps } from './Control';
import * as cleaner from '../../utilities/cleaner';
import * as api from '../../utilities/api';
import { shallow } from 'enzyme';

describe('CONTROL', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Control />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should set state of the entered zip code', () => {
      const wrapper = shallow(<Control />);
      const mockEvent = { target: { value: 80021 } };
      const expected = 80021;
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('zip')).toEqual(expected);
    });
  });

  describe('handleSubmit', () => {
    it('should set state call preventDefault', () => {
      const wrapper = shallow(<Control markets={jest.fn()} />);
      const mockEvent = { target: { value: 80021 }, preventDefault: jest.fn() };
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('should set state Zip = ""', () => {
      const wrapper = shallow(<Control markets={jest.fn()} />);
      const mockEvent = { target: { value: 80021 }, preventDefault: jest.fn() };
      const expected = '';
      wrapper.setState({ zip: 80021 });
      wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.state('zip')).toEqual(expected);
    });
  });

  describe('getNearbyMarketsZip', () => {
    it.skip('should call history.push', async () => {
      const wrapper = shallow(<Control history={{ push: jest.fn() }} />);
      history.push = jest.fn();
      await wrapper.instance().getNearbyMarketsZip();
      expect(history.push).toHaveBeenCalled();
    });
  });

  describe('handleCurrentLocation', () => {
    it.skip('should set state searchByZip = false', () => {
      const wrapper = shallow(<Control />);
      const mockEvent = { target: { value: 80021 }, preventDefault: jest.fn() };
      const expected = false;
      wrapper.instance().handleCurrentLocation(mockEvent);
      expect(wrapper.state('searchByZip')).toEqual(expected);
    });
    it.skip('should set state searchByLocation = true', () => {
      const wrapper = shallow(<Control />);
      const mockEvent = { target: { value: 80021 }, preventDefault: jest.fn() };
      const expected = true;
      wrapper.instance().handleCurrentLocation(mockEvent);
      expect(wrapper.state('searchByLocation')).toEqual(expected);
    });
  });

  describe('getNearbyMarkets', () => {
    it('should call api.fetchParse and cleaner.cleanMarkets', async () => {
      const wrapper = shallow(<Control />);
      const mockLat = 103.5;
      const mockLong = 1024;
      const expected =
      // eslint-disable-next-line
        'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=103.5&lng=1024';
      api.fetchParse = jest.fn().mockReturnValue({});
      cleaner.cleanMarkets = jest.fn();
      await wrapper.instance().getNearbyMarkets(mockLat, mockLong);
      expect(api.fetchParse).toHaveBeenCalledWith(expected);
      expect(cleaner.cleanMarkets).toHaveBeenCalled();
    });
  });

  describe('updateMarketDetails', () => {
    it('should call api.marketDetails', () => {
      const wrapper = shallow(<Control />);
      const mockID = 25;
      api.marketDetails = jest.fn();
      wrapper.instance().updateMarketDetails(mockID);
      expect(api.marketDetails).toHaveBeenCalledWith(mockID);
    });
  });

  describe('MSTP and MDTP', () => {
    it('should define props', () => {
      const mockStore = {
        markets: []
      };
      const expected = [];
      const mapped = mapStateToProps(mockStore);
      expect(mapped.marketsArray).toEqual(expected);
    });

    it('should call the dispatch function on MARKETS', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.markets();
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call the dispatch function on MARKET_DETAILS', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.marketDetails();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
