import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Map from '../Map/Map';
import './TextCard.css';

export class TextCard extends Component {
  render() {
    const active = this.props.activeMarket;
    const marketInfo = this.props.markets.find(
      market => market.id === active.id
    );

    const products = marketInfo.Products.split(';').map((product, index) => {
      return <li key={index}>{product}</li>;
    });

    return (
      <div className="text-card">
        <h2 className="name">{marketInfo.marketname}</h2>
        <div className="info">
          <p>Address: {marketInfo.Address}</p>
          <p>Schedule: {marketInfo.Schedule}</p>
          <ol>
            Products:
            {products}
          </ol>
        </div>
        <div id="map">
          <Map google={this.props.google} />
        </div>
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
  connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({apiKey: 'AIzaSyBvfTcCOD9GiniyDDDmI4TuLefT_WTN15c'})(TextCard))
);
