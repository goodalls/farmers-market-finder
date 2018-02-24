import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import * as actions from '../../actions/actions';
import * as api from '../../utilities/api';
import { connect } from 'react-redux';
import './Container.css';
import PropTypes from 'prop-types';

export class Container extends Component {
  markets = () => {
    return this.props.markets.map((market, index) => {
      return (
        <li key={index}>
          <span onClick={event => this.props.fav(event, market.id)}>
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

  componentDidMount() {}

  handleSingleMarket = async (event, id) => {
    const fetch = await api.marketDetails(id);
    this.props.marketDetails(id, fetch.marketdetails);
    this.props.activeMarket(id);
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
      return (
        <div className="container-check">
          <Link to={'/map'}>{'Map View'}</Link>
          <ol>{this.markets()}</ol>
        </div>
      );
    }
  };

  render = () => {
    return <div className="container">{this.loadingRenderCheck()}</div>;
  };
}
Container.propTypes = {
  markets: PropTypes.array,
  fav: PropTypes.func,
  marketDetails: PropTypes.string,
  activeMarket: PropTypes.string,
  history: PropTypes.string
};

export const mapStateToProps = store => ({
  markets: store.markets
});

export const mapDispatchToProps = dispatch => ({
  marketDetails: (id, detail) => dispatch(actions.addDetails(id, detail)),
  activeMarket: id => dispatch(actions.activeMarket(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
