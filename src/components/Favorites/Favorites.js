import React, { Component } from 'react';
import './Favorites.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Favorites extends Component {
  favCards = () => {
    if (this.props.user) {
      return this.props.user.map((fav, index) => {
        return (
          <article key={fav.id + index}>
            <span onClick={event => this.props.fav(event, fav)}>&#9829;</span>
            <div onClick={event => this.handleSingleMarket(event, fav.id)}>
              <p>Distance: {fav.distance}</p>
              <p>{fav.marketname}</p>
            </div>
          </article>
        );
      });
    }
  };

  render() {
    return <div className="favorite">{this.favCards()}</div>;
  }
}

Favorites.propTypes = {
  user: PropTypes.array,
  fav: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.user.favorites
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
