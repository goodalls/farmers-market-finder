import React from 'react';
import { Favorites, mapStateToProps } from './Favorites';
import { mockMarkets } from '../../__mocks__/mockData';
import { shallow } from 'enzyme';

describe('FAVORITES', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Favorites user={mockMarkets} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MSTP', () => {
    it('should map state of FAV to props', () => {
      const mockStore = { user: { favorites: [] } };
      const mapped = mapStateToProps(mockStore);
      expect(mapped.user).toEqual([]);
    });
  });
});
