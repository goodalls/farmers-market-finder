import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Map from '../Map/Map';
import './Card.css';

export class Card extends Component {
  render() {
    const { id } = this.props;
    const marketInfo = this.props.markets.find(market => market.id === id);

    const products = marketInfo.Products.split(';').map((product, index) => {
      return <li key={index}>{product}</li>;
    });

    return (
      <div className="text-card">
        <span onClick={this.props.fav}>&#9829;</span>
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

const mapWrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyBvfTcCOD9GiniyDDDmI4TuLefT_WTN15c'
});

export const mapStateToProps = state => ({
  markets: state.markets
});

export const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));
