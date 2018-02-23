import React, { Component } from 'react';
import { MapContainer } from '../MapContainer/MapContainer';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import './Card.css';

export class Card extends Component {
  render() {
    const { id, markets, fav, google } = this.props;
    const marketInfo = markets.find(market => market.id === id);
    const schedule = marketInfo.Schedule.slice(0, -16);
    const products = marketInfo.Products.split(';').map((product, index) => {
      return <li key={index}>{product}</li>;
    });

    return (
      <div className="text-card" >
        <span onClick={(event) => fav(event, marketInfo.id)}>&#9829;</span>
        <h2 className="name">{marketInfo.marketname}</h2>
        <div className="info">
          <p>Address: {marketInfo.Address}</p>
          <p>Schedule: {schedule}</p>
          <ol>
            Products:
            {products}
          </ol>
        </div>
        <div id="map">
          <MapContainer />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  markets: state.markets
});

export const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));
