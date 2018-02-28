import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/actions';
import * as api from '../../utilities/api';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Container.css';

export class Container extends Component {
  activeListCheck() {
    console.log(this.props);
    if (this.props.id === 'zip') {
      return 'zipMarkets';
    } else if (this.props.id === 'current') {
      return 'markets';
    }
  }

  markets = () => {
    const marketList = this.activeListCheck();
    console.log('markets');
    return this.props[marketList].map((market, index) => {
      return (
        <li key={index}>
          <span
            className={market.favorite ? 'favorite active' : 'favorite'}
            onClick={event => this.props.fav(event, market)}
          >
            &#9829;
          </span>
          <div onClick={event => this.handleSingleMarket(event, market.id)}>
            <p>Distance: {market.distance}</p>
            <p>{market.marketname}</p>
          </div>
        </li>
      );
    });
  };

  handleSingleMarket = async (event, id) => {
    // const fetch = await api.marketDetails(id);
    // this.props.marketDetails(id, fetch.marketdetails);
    this.props.history.push('/single-market/' + id);
  };

  loadingRenderCheck = () => {
    if (!this.props.markets.length && !this.props.zipMarkets.length) {
      return (
        <div className="loading">
          <p>Loading...</p>
        </div>
      );
    } else {
      return <ol>{this.markets()}</ol>;
    }
  };

  markets = () => {
    return this.props.markets.map((market, index) => {
      return (
        <li key={index}>
          <span
            className={market.favorite ? 'favorite active' : 'favorite'}
            onClick={event => this.props.fav(event, market)}
          >
            &#9829;
          </span>
          <div onClick={event => this.handleSingleMarket(event, market.id)}>
            <p>Distance: {market.distance}</p>
            <p>{market.marketname}</p>
          </div>
        </li>
      );
    });
  };

  render = () => {
    return <div className="container">{this.loadingRenderCheck()}</div>;
  };
}
Container.propTypes = {
  fav: PropTypes.func,
  history: PropTypes.object,
  marketDetails: PropTypes.func,
  markets: PropTypes.array,
  user: PropTypes.array,
  id: PropTypes.string
};

export const mapStateToProps = store => ({
  markets: store.markets,
  user: store.user.favorites,
  zipMarkets: store.zipMarkets
});

export default withRouter(connect(mapStateToProps)(Container));
