import React, { Component } from 'react';
import './App.css';
import * as api from '../../utilities/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: [],
      position: {}
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const location = await navigator.geolocation.getCurrentPosition(
      response => {
        const { latitude, longitude } = response.coords;
        this.getNearbyMarkets(parseFloat(latitude), parseFloat(longitude));
      }
    );
  }

  getNearbyMarkets = async (latitude, longitude) => {
    const url = `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=${latitude}&lng=${longitude}`;
    const initial = await api.fetchParse(url);
    console.log(initial)
  };

  render() {
    return <div className="App">Hello</div>;
  }
}

export default App;
