import React, { Component } from 'react';
import './Favorites.css';
import { connect } from 'react-redux';

export class Favorites extends Component {
  favCards = () => {
    this.props.user.map((fav, index) => {
      return (
        <article key={fav.id + index}>
          <button onClick={fav}>Favorite</button>
        </article>
      );
    });
  };
  render() {
    return <div className="favorite">{this.favCards}</div>;
  }
}

const mapStateToProps = state => ({
  user: state.user.favorites
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
