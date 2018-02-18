import React, { Component } from 'react';
import './TextCard.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';



export class TextCard extends Component {

  render() {
    const active = this.props.activeMarket;
    const marketInfo = this.props.markets.find(market=> market.id === active.id);
    
    return (
      <div className='text-card'>
        <p>schedule {marketInfo.Schedule}</p>
        <p>Products {marketInfo.Products}</p>
        <p>Address {marketInfo.Address}</p>
        <p>GoogleLink {marketInfo.GoogleLink}</p>
        <p>marketname {marketInfo.marketname}</p>
      </div>
    )
  }
}

export const mapStateToProps = state => ({ markets: state.markets, activeMarket: state.activeMarket });

export const mapDispatchToProps = dispatch => ({
  
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TextCard));
