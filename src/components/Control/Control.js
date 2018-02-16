import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Control.css';
import * as api from '../../utilities/api';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';


export class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      searchByZip: false,
      searchByLocation: false,
      position: {}
    };
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ zip: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('handleSubmit');
    this.setState({ searchByZip: true, searchByLocation: false });
  };

  handleCurrentLocation = async event => {
    await navigator.geolocation.getCurrentPosition(response => {
      const { latitude, longitude } = response.coords;
      this.getNearbyMarkets(parseFloat(latitude), parseFloat(longitude));
      this.setState({
        position: {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          searchByZip: false,
          searchByLocation: true
        }
      });
    });
  };

  getNearbyMarkets = async (latitude, longitude) => {
    const url = `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=${latitude}&lng=${longitude}`;
    const initial = await api.fetchParse(url);
    this.props.markets(initial.results);
  };

  render() {
    return (
      <section className="control">
        <button onClick={this.handleCurrentLocation}>
          Search by Current Location
        </button>
        <h4>
          search for Farmers markets near you by entering your zip code below or
          choosing to find markets close to your current location
        </h4>
        {/* <NavLink to={'/sign-in'}>{Sign - In}</NavLink>
        <NavLink to={'/favorites'}>{Favorites}</NavLink> */}
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="zip" />
          <input
            type="number"
            id="zip"
            maxLength="5"
            name="zip"
            value={this.state.zip}
            onChange={this.handleChange}
            placeholder="ZIP"
          />
          <input type="submit" />
        </form>
      </section>
    );
  }
}

export const mapStateToProps = store => ({});

export const mapDispatchToProps = dispatch => ({
  markets: markets => {
    dispatch(actions.populateMarkets(markets));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Control);
