import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/actions';
import * as api from '../../utilities/api';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Container.css';

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      market: {}
    };
  }

  favorite = (event, market) => {
    if (market.favorite === false) {
      market.favorite = true;
      this.props.updateFavorites(market);
      this.setState({ market });
    } else {
      market.favorite = false;
      this.props.removeFavorite(market);
      this.setState({ market: {} });
    }
  };

  handleSingleMarket = async (event, id) => {
    const fetch = await api.marketDetails(id);
    this.props.marketDetails(id, fetch.marketdetails);
    this.props.history.push('/single-market/' + id);
  };

  loadingRenderCheck = () => {
    if (!this.props.markets.length) {
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
            onClick={event => this.favorite(event, market)}
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
  updateFavorites: PropTypes.func,
  removeFavorite: PropTypes.func
};

export const mapStateToProps = store => ({
  markets: store.markets,
  user: store.user.favorites
});

export const mapDispatchToProps = dispatch => ({
  marketDetails: (id, detail) => dispatch(actions.addDetails(id, detail)),
  updateFavorites: favorite => dispatch(actions.updateFavorites(favorite)),
  removeFavorite: favorite => dispatch(actions.removeFavorite(favorite))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
