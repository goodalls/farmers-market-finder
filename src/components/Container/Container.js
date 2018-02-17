import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as api from '../../utilities/api';
import './Container.css';

export class Container extends Component {
  markets = () => {
    return this.props.markets.map((market, index) => {
      return (
        <li key={index} onClick={(event) => this.handleSingleMarket(event, market.id)}>
          <p>Distance: {market.distance}</p>
          <p>{market.marketname}</p>
        </li>
      );
    });
  };

  componentDidMount() { }

  handleSingleMarket = async(event, id) => {
    const fetch = await api.marketDetails(id);
    //add to store array for details
  };

  loadingRenderCheck = () => {
    if (!this.props.markets.length) {
      return (
        <div className="loading"></div>
      );
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

export const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
