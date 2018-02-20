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

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="background-wrapper">
        <div className="app">
          <Header />
          <Control />
          <Route exact path="/" component={Why} />
          <Route exact path="/market-list" component={Container} />
          <Route exact path="/map-list" component={Map} />
          <Route
            path="/single-market/:id"
            render={({ match }) => {
              const { id } = match.params;
              const singleMarket = this.props.markets.find(
                market => market.id === id
              );

              if (singleMarket) {
                return <Card {...singleMarket} />;
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
