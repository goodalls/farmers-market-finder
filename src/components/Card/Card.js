import React, { Component } from 'react';
import * as actions from '../../actions/actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.css';

export class Card extends Component {
  render() {
    const { id, markets, fav, zipMarkets } = this.props;
    const marketList = zipMarkets.find(market => id === market.id)
      ? zipMarkets
      : markets;
    const marketInfo = marketList.find(market => id === market.id);
    const schedule = marketInfo.Schedule.slice(0, -16);
    const products = marketInfo.Products.split(';').map((product, index) => {
      return <li key={index}>{product}</li>;
    });

    return (
      <div className="text-card">
        <span
          className={marketInfo.favorite ? 'favorite active' : 'favorite'}
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
      </div>
    );
  }
}

Card.propTypes = {
  fav: PropTypes.func,
  id: PropTypes.string,
  markets: PropTypes.array,
  removeFavorite: PropTypes.func,
  updateFavorites: PropTypes.func,
  user: PropTypes.array,
  zipMarkets: PropTypes.array
};

export const mapStateToProps = state => ({
  markets: state.markets,
  user: state.user.favorites,
  zipMarkets: state.zipMarkets
});

export const mapDispatchToProps = dispatch => ({
  updateFavorites: favorite => dispatch(actions.updateFavorites(favorite)),
  removeFavorite: favorite => dispatch(actions.removeFavorite(favorite))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));
