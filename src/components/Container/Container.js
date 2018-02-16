import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Container.css';
import { withRouter, NavLink } from 'react-router-dom';

export class Wrapper extends Component {
  markets = () => {
    console.log(this.props.markets);
    return this.props.markets.map((market, index) => {
      return <li key={index} onClick={() => this.handleSingleMarket(market.id)}>{market.marketname}</li>;
    });
  };
  
  handleSingleMarket = (id) => {
    
  }

  render() {
    return (
      <div className="container">
        <NavLink to={'/map'}>{'Map View'}</NavLink>
        <ol>{this.markets()}</ol>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  markets: store.markets
});

export const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Wrapper)
);
