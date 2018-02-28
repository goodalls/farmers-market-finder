import React from 'react';
import { Container, mapStateToProps } from './Container';
import { shallow } from 'enzyme';

describe('CONTAINER', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Container
        markets={[]}
        user={[]}
        marketDetails={jest.fn()}
        history={{ push: jest.fn() }}
        zipMarkets={[]}
      />
    );
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('markets', () => {
    it('should match snapshot with different market arrays', () => {
      expect(wrapper).toMatchSnapshot();
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
  });
});
