import React, { Component } from 'react';
import MapContainer from '../MapContainer/MapContainer';
import * as actions from '../../actions/actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.css';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      market: {},
      favorites: []
    };
  }
  componentDidMount() {
    this.setState({favorites: this.props.user});
  }

  favorite = (event, market) => {
    if (market.favorite === false) {
      market.favorite = true;
      this.props.updateFavorites(market);
      this.setState({market});
    } else {
      market.favorite = false;
      this.props.removeFavorite(market);
      this.setState({market: {}});
    }
  };

  render() {
    const { id, markets } = this.props;
    const marketInfo = markets.find(market => market.id === id);
    const schedule = marketInfo.Schedule.slice(0, -16);
    const products = marketInfo.Products.split(';').map((product, index) => {
      return <li key={index}>{product}</li>;
    });

    return (
      <div className="text-card">
        <span
          className={marketInfo.favorite ? 'favorite active' : 'favorite'}
          onClick={event => this.favorite(event, marketInfo)}
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
        <MapContainer address={marketInfo.Address} />
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
