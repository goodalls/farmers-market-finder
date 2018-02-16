import React, { Component } from 'react';
import * as actions from '../../actions/actions';
import * as api from '../../utilities/api';
import Control from '../Control/Control';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import Why from '../WhyWrapper/Why';
import '../../styles/colors.css';
import './App.css';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: [],
      position: {}
    };
  }

  componentDidMount() {
   
  }

  async initialFetch() {
    await navigator.geolocation.getCurrentPosition(response => {
      const { latitude, longitude } = response.coords;
      this.getNearbyMarkets(parseFloat(latitude), parseFloat(longitude));
      this.setState({position: {latitude: parseFloat(latitude), longitude: parseFloat(longitude)}});
    });
  }

  getNearbyMarkets = async (latitude, longitude) => {
    const url = `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=${latitude}&lng=${longitude}`;
    const initial = await api.fetchParse(url);
    this.props.markets(initial.results);
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Control />
        <Route path='/' component={Why}/>
      </div>
    );
  }
}

export const mapStateToProps = store => ({});

export const mapDispatchToProps = dispatch => ({
  markets: markets => {
    dispatch(actions.populateMarkets(markets));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
