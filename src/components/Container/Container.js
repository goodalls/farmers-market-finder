import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Container.css';
import { withRouter, NavLink, Link } from 'react-router-dom';
import loading from './carrot-gif.gif';

export class Container extends Component {
  markets = () => {
    console.log(this.props.markets);
    return this.props.markets.map((market, index) => {
      return (
        <li key={index} onClick={() => this.handleSingleMarket(market.id)}>
          {market.marketname}
        </li>
      );
    });
  };

  componentDidMount() {
  }

  handleSingleMarket = id => {};

  loadingRenderCheck = () => {
    if (!this.props.markets.length) {
      return (
        <div className="loading">
          <img src={loading} alt="loading timer" height="200" width="200" />
        </div>
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
