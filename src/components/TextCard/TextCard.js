import React, { Component } from 'react';
import './TextCard.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

export class TextCard extends Component {
  render() {
    const active = this.props.activeMarket;
    const marketInfo = this.props.markets.find(
      market => market.id === active.id
    );

    const products = marketInfo.Products.split(';').map((product, index)=>{
      return <li key={index}>{product}</li>;
    });

    return (
      <div className="text-card">
        <Link to="/single-market-map" className='link'>Map View</Link>
        <h2 className='name'>marketname {marketInfo.marketname}</h2>
        <div className='info'>
          <p>Address: {marketInfo.Address}</p>
          <p>Schedule: {marketInfo.Schedule}</p>
          <ol>Products:
          {products}
          </ol>
        </div>
        <div id='map'>GoogleLink {marketInfo.GoogleLink}</div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  markets: state.markets,
  activeMarket: state.activeMarket
});

export const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TextCard)
);
