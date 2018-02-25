import React, { Component } from 'react';
import './Favorites.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Favorites extends Component {


  handleSingleMarket = async (event, id) => {
    this.props.history.push('/single-market/' + id);
  };

  favCards = () => {
    if (this.props.user) {
      return this.props.user.map((fav, index) => {
        return (
          <article key={fav.id + index}>
            <span className='favorite' onClick={event => this.props.fav(event, fav)}>&#9829;</span>
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
