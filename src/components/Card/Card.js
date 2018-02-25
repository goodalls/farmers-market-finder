import React, { Component } from 'react';
import { MapContainer } from '../MapContainer/MapContainer';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.css';

export class Card extends Component {
  render() {
    const { id, markets, fav } = this.props;
    const marketInfo = markets.find(market => market.id === id);
    const schedule = marketInfo.Schedule.slice(0, -16);
    const products = marketInfo.Products.split(';').map((product, index) => {
      return <li key={index}>{product}</li>;
    });
    const isFavorite = this.props.user.some(userFav => userFav.id === id);

    return (
      <div className="text-card">
        <span
          className={isFavorite ? 'favorite active' : 'favorite'}
          onClick={event => fav(event, marketInfo)}
        >
          &#9829;
        </span>
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
Card.propTypes = {
  id: PropTypes.string,
  markets: PropTypes.array,
  fav: PropTypes.func,
  user: PropTypes.array
};

export const mapStateToProps = state => ({
  markets: state.markets,
  user: state.user.favorites
});

export default withRouter(connect(mapStateToProps)(Card));
