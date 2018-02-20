import React, { Component } from 'react';
import * as cleaner from '../../utilities/cleaner';
import * as actions from '../../actions/actions';
import * as api from '../../utilities/api';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Control.css';

export class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      searchByZip: false,
      searchByLocation: false,
      position: {},
      error: []
    };
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ zip: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ searchByZip: true, searchByLocation: false });
    this.getNearbyMarketsZip(this.state.zip);
    this.setState({zip: ''});
  };

  getNearbyMarketsZip = async (zip) => {
    try {
      this.props.history.push('/market-list');
      const url = `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zip}`;
      const initial = await api.fetchParse(url);
      const clean = await cleaner.cleanMarkets(initial.results);
      this.props.markets(clean);
    } catch (error) {
      this.setState({ error: [...this.state.error, { error }] });
    }
  };

  handleCurrentLocation = async () => {
    try {
      await navigator.geolocation.getCurrentPosition(response => {
        const { latitude, longitude } = response.coords;
        this.getNearbyMarkets(parseFloat(latitude), parseFloat(longitude));
        this.setState({
          position: {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude)
          },
          searchByZip: false,
          searchByLocation: true
        });
      });
    } catch (error) {
      this.setState({ error: [...this.state.error, { error }] });
    }
  };

  getNearbyMarkets = async (latitude, longitude) => {
    try {
      const url = `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=${latitude}&lng=${longitude}`;
      const initial = await api.fetchParse(url);
      const clean = await cleaner.cleanMarkets(initial.results);
      this.props.markets(clean);
    } catch (error) {
      this.setState({ error: [...this.state.error, { error }] });
    }
  };

  render() {
    return (
      <section className="control">
        <Link to="/market-list">
          <button onClick={this.handleCurrentLocation}>
            Search by Current Location
          </button>
        </Link>
        <h4>
          Search for Farmers Markets near you by entering your zip code below or
          choosing to find markets close to your current location
        </h4>
        {/* <NavLink to={'/sign-in'}>{Sign - In}</NavLink>
        <NavLink to={'/favorites'}>{Favorites}</NavLink> */}
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="zip" />
          <input
            className='zip'
            type="number"
            id="zip"
            maxLength="5"
            name="zip"
            value={this.state.zip}
            onChange={this.handleChange}
            placeholder="ZIP"
          />
          <input type="submit" value='Search by ZIP' />
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
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Control)
);
