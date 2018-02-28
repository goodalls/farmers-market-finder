import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';

describe('APP', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should have favorite', () => {
    const wrapper = shallow(
      <App updateFavorites={jest.fn()} removeFavorite={jest.fn()} />
    );
    const mockEvent = { preventDefault: jest.fn() };
    const mockMarket = {
      name: 'marketName',
      place: 'address',
      items: 'thingys at the market',
      favorite: false
    };
    const expected = {
      name: 'marketName',
      place: 'address',
      items: 'thingys at the market',
      favorite: true
    };
    wrapper.instance().favorite(mockEvent, mockMarket);
    expect(wrapper.props().updateFavorites).toHaveBeenCalledWith(expected);
  });

  it.skip('should have favorite', () => {
    const wrapper = shallow(
      <App updateFavorites={jest.fn()} removeFavorite={jest.fn()} />
    );
    const mockEvent = { preventDefault: jest.fn() };
    const mockMarket = {
      name: 'marketName',
      place: 'address',
      items: 'thingys at the market',
      favorite: true
    };
    const expected = {
      name: 'marketName',
      place: 'address',
      items: 'thingys at the market',
      favorite: false
    };
    wrapper.instance().favorite(mockEvent, mockMarket);
    expect(wrapper.props().removeFavorite).toHaveBeenCalledWith(expected);
  });

  describe('MSTP and MDTP', () => {
    it('should map props from store', () => {
      const mockStore = { markets: [{}, {}] };
      const mapped = mapStateToProps(mockStore);
      const expected = [{}, {}];
      expect(mapped.markets).toEqual(expected);
    });

    it('should call dispatch on updateFavorites', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.updateFavorites();
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call dispatch removeFavorite', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.removeFavorite();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
