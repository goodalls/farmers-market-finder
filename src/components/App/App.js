import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as actions from '../../actions/actions';
import Container from '../Container/Container';
import Favorites from '../Favorites/Favorites';
import Control from '../Control/Control';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Why from '../WhyQuotes/Why';
import '../../styles/colors.css';
import Card from '../Card/Card';
import Map from '../Map/Map';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: []
    };
  }

  favorite = (event, market) => {
    //needs to check for dups
    if (market.favorite === false) {
      market.favorite = true;
      this.props.updateFavorites(market);
    } else {
      market.favorite = false;
      this.props.removeFavorite(market);
    }
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
            path="/market-list"
            render={() => {
              return <Container fav={this.favorite} />;
            }}
          />
          <Route exact path="/map-list" component={Map} />
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

              if (singleMarket) {
                return <Card {...singleMarket} fav={this.favorite} />;
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
  updateFavorites: PropTypes.func,
  removeFavorite: PropTypes.func
};

export const mapStateToProps = store => ({
  markets: store.markets
});

export const mapDispatchToProps = dispatch => ({
  updateFavorites: (favorite) => dispatch(actions.updateFavorites(favorite)),
  removeFavorite: (favorite) => dispatch(actions.removeFavorite(favorite))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
