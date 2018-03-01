import React, { Component } from 'react';
import ErrorBoundrary from '../ErrorBoundary/ErrorBoundary';
import { Route, withRouter } from 'react-router-dom';
import * as actions from '../../actions/actions';
import Favorites from '../Favorites/Favorites';
import Container from '../Container/Container';
import Control from '../Control/Control';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Why from '../WhyQuotes/Why';
import PropTypes from 'prop-types';
import '../../styles/colors.css';
import Card from '../Card/Card';
import './App.css';

export class App extends Component {
  favorite = (event, market) => {
    const newMarket = market;
    newMarket.favorite = !newMarket.favorite;
    newMarket.favorite
      ? this.props.updateFavorites(newMarket)
      : this.props.removeFavorite(newMarket);
  };

  render() {
    return (
      <div className="background-wrapper">
        <div className="app">
          <Header />
          <Control />
          <Route exact path="/" component={Why} />
          <Route
            exact
            path="/market-list/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <Container id={id} fav={this.favorite} />;
            }}
          />
          <Route
            exact
            path="/favorite"
            render={() => {
              return <Favorites fav={this.favorite} />;
            }}
          />
          <Route
            path="/single-market/:id"
            render={({ match }) => {
              const { id } = match.params;
              const singleMarket = this.props.markets.find(
                market => market.id === id
              );
              const zipMarket = this.props.zipMarkets.find(
                market => market.id === id
              );

              if (singleMarket) {
                return <Card {...singleMarket} fav={this.favorite} />;
              } else if (zipMarket) {
                return <Card {...zipMarket} fav={this.favorite} />;
              } else {
                return null;
              }
            }}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  markets: PropTypes.array,
  removeFavorite: PropTypes.func,
  updateFavorites: PropTypes.func,
  zipMarkets: PropTypes.array
};

export const mapStateToProps = store => ({
  markets: store.markets,
  zipMarkets: store.zipMarkets
});

export const mapDispatchToProps = dispatch => ({
  updateFavorites: favorite => dispatch(actions.updateFavorites(favorite)),
  removeFavorite: favorite => dispatch(actions.removeFavorite(favorite))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
