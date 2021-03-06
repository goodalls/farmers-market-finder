import React, { Component } from 'react';
import * as cleaner from '../../utilities/cleaner';
import * as actions from '../../actions/actions';
import * as api from '../../utilities/api';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Control.css';

export class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      error: []
    };
  }

  componentDidMount() {
    this.handleCurrentLocation();
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ zip: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getNearbyMarketsZip(this.state.zip);
    this.setState({ zip: '' });
  };

  getNearbyMarketsZip = async zip => {
    if (!this.props.zipMarketsArray.length) {
      try {
        // eslint-disable-next-line
        const url = `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zip}`;
        const initial = await api.fetchParse(url);
        const clean = await cleaner.cleanMarkets(initial.results);
        const updateDetails = await clean.map(async market => {
          const updatedMarket = await this.updateMarketDetails(market.id);
          return { ...market, ...updatedMarket.marketdetails };
        });
        const promise = await Promise.all(updateDetails);
        this.props.zipMarkets(promise);
      } catch (error) {
        this.setState({ error: [...this.state.error, { error }] });
      }
    }
    this.props.history.push('/market-list/zip');
  };

  handleCurrentLocation = async () => {
    if (!this.props.marketsArray.length) {
      try {
        await navigator.geolocation.getCurrentPosition(response => {
          const { latitude, longitude } = response.coords;
          this.getNearbyMarkets(parseFloat(latitude), parseFloat(longitude));
        });
      } catch (error) {
        this.setState({ error: [...this.state.error, { error }] });
      }
    }
  };

  getNearbyMarkets = async (latitude, longitude) => {
    try {
      // eslint-disable-next-line
      const url = `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=${latitude}&lng=${longitude}`;
      const initial = await api.fetchParse(url);
      const clean = await cleaner.cleanMarkets(initial.results);
      const updateDetails = await clean.map(async market => {
        const updatedMarket = await this.updateMarketDetails(market.id);
        return { ...market, ...updatedMarket.marketdetails };
      });
      const promise = await Promise.all(updateDetails);
      this.props.markets(promise);
    } catch (error) {
      this.setState({ error: [...this.state.error, { error }] });
    }
  };

  updateMarketDetails = async id => {
    const fetch = await api.additionalFetch(id);
    return fetch;
  };

  render() {
    return (
      <section className="control">
        <User />
        <Link to="/market-list/current">
          <button onClick={this.handleCurrentLocation}>
            Search by Current Location
          </button>
        </Link>
        <h4>
          Search for Farmers Markets near you by entering your zip code below or
          choosing to find markets close to your current location
        </h4>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="zip" />
          <input
            className="zip"
            type="number"
            id="zip"
            maxLength="5"
            name="zip"
            value={this.state.zip}
            onChange={this.handleChange}
            placeholder="ZIP"
          />
          <input type="submit" className="submit" value="Search by ZIP" />
        </form>
      </section>
    );
  }
}

Control.propTypes = {
  markets: PropTypes.func,
  marketsArray: PropTypes.array,
  history: PropTypes.object,
  zipMarkets: PropTypes.func,
  zipMarketsArray: PropTypes.array
};

export const mapStateToProps = store => ({
  marketsArray: store.markets,
  zipMarketsArray: store.zipMarkets
});

export const mapDispatchToProps = dispatch => ({
  markets: markets => dispatch(actions.populateMarkets(markets)),
  zipMarkets: markets => dispatch(actions.populateZipMarkets(markets))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Control)
);
