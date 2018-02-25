import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps, mapDispatchToProps } from './Card';

describe('CARD', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card markets={[{ Products: 'hello; big; string', Schedule: 'another large string'}]} user={[]} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MSTP', () => {
    it('should map props from store', () => {
      const mockStore = { markets: [{}, {}], user: {favorites: []} };
      const mapped = mapStateToProps(mockStore);
      const expected = [{}, {}];
      expect(mapped.markets).toEqual(expected);
    });

    it('should map props from store', () => {
      const mockStore = { markets: [{}, {}], user: {favorites: []} };
      const mapped = mapStateToProps(mockStore);
      const expected = [];
      expect(mapped.user).toEqual(expected);
    });
  });
});
