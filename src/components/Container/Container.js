import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import * as actions from '../../actions/actions';
import * as api from '../../utilities/api';
import { connect } from 'react-redux';
import './Container.css';

export class Container extends Component {
  markets = () => {
    return this.props.markets.map((market, index) => {
      return (
        <li
          key={index}
          onClick={event => this.handleSingleMarket(event, market.id)}
        >
          <p>Distance: {market.distance}</p>
          <p>{market.marketname}</p>
        </li>
      );
    });
  };

  componentDidMount() {}

  handleSingleMarket = async (event, id) => {
    const fetch = await api.marketDetails(id);
    this.props.marketDetails(id, fetch.marketdetails);
  };

  loadingRenderCheck = () => {
    if (!this.props.markets.length) {
      return <div className="loading" />;
    } else {
      return (
        <div>
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

export const mapStateToProps = store => ({
  markets: store.markets
});

export const mapDispatchToProps = dispatch => ({
  marketDetails:(id, detail) => dispatch(actions.addDetails(id, detail))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
