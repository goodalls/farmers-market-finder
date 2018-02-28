import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.css';

export class Card extends Component {
  render() {
    console.log(this.props); //need to check what is being passed because of router in app
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
  user: PropTypes.array
};

export const mapStateToProps = state => ({
  markets: state.markets,
  user: state.user.favorites
});

export default withRouter(connect(mapStateToProps)(Card));
