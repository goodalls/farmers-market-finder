import React, { Component } from 'react';
import * as actions from '../../actions/actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.css';

export class Card extends Component {
  componentDidMount() {
    this.setState({favorites: this.props.user});
  }

  render() {
    const { id, markets, fav } = this.props;
    const marketInfo = markets.find(market => market.id === id);
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
  id: PropTypes.string,
  markets: PropTypes.array,
  fav: PropTypes.func,
  user: PropTypes.array,
  updateFavorites: PropTypes.func,
  removeFavorite: PropTypes.func
};

export const mapStateToProps = state => ({
  markets: state.markets,
  user: state.user.favorites
});

export const mapDispatchToProps = dispatch => ({
  updateFavorites: favorite => dispatch(actions.updateFavorites(favorite)),
  removeFavorite: favorite => dispatch(actions.removeFavorite(favorite))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));
