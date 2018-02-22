import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Container from '../Container/Container';
import Card from '../Card/Card';
import Control from '../Control/Control';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import Why from '../WhyQuotes/Why';
import '../../styles/colors.css';
import Map from '../Map/Map';
import './App.css';
import Favorites from '../Favorites/Favorites';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: []
    };
  }

  favorite = () => {
    console.log('favorite clicked');
  };

  render() {
    return (
      <div className="background-wrapper">
        <div className="app">
          <Header />
          <Control />
          <Route exact path="/" component={Why} />
          <Route exact path="/market-list"
            render={() => {
              return <Container fav={this.favorite} />;
            }}
          />
          <Route exact path="/map-list" component={Map} />
          <Route exact path="/favorite"
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
                return <Card {...singleMarket} fav={this.favorite}/>;
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

export const mapStateToProps = store => ({
  markets: store.markets
});

export const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
