import React, { Component } from 'react';
import './Favorites.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Favorites extends Component {
  favCards = () => {
    if (this.props.user) {
      return this.props.user.map((fav, index) => {
        return (
          <article key={fav.id + index}>
            <span
              className="favorite active"
              onClick={event => this.props.fav(event, fav)}
            >
              &#9829;
            </span>
            <Link to={`/single-market/${fav.id}`}>
              <p>Distance: {fav.distance}</p>
              <p>{fav.marketname}</p>
            </Link>
          </article>
        );
      });
    } else {
      return (
        <div className="loading">
          <p>Loading...</p>
        </div>
      );
    }
  };

  render() {
    return <div className="favorite-component">{this.favCards()}</div>;
  }
}

Favorites.propTypes = {
  fav: PropTypes.func,
  user: PropTypes.array
};

export const mapStateToProps = state => ({
  user: state.user.favorites
});

export default connect(mapStateToProps)(Favorites);
