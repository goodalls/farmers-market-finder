import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/actions';
import * as api from '../../utilities/api';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Container.css';

export class Container extends Component {
  markets = () => {
    return this.props.markets.map((market, index) => {
      const isFavorite = this.props.user.some(
        userFav => userFav.id === market.id
      );
      return (
        <li key={index}>
          <span
            className={isFavorite ? 'favorite active' : 'favorite'}
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

  render = () => {
    return <div className="container">{this.loadingRenderCheck()}</div>;
  };
}
Container.propTypes = {
  fav: PropTypes.func,
  history: PropTypes.object,
  marketDetails: PropTypes.func,
  markets: PropTypes.array,
  user: PropTypes.array
};

export const mapStateToProps = store => ({
  markets: store.markets,
  user: store.user.favorites
});

export const mapDispatchToProps = dispatch => ({
  marketDetails: (id, detail) => dispatch(actions.addDetails(id, detail))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
