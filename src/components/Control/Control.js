import React, { Component } from 'react';
import * as cleaner from '../../utilities/cleaner';
import * as actions from '../../actions/actions';
import * as api from '../../utilities/api';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import User from '../User/User';
import './Control.css';
import PropTypes from 'prop-types';

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
    this.props.markets([]);
  };

  getNearbyMarketsZip = async zip => {
    try {
      this.props.history.push('/market-list');
      // eslint-disable-next-line
      const url = `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zip}`;
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

  handleCurrentLocation = async () => {
    if (this.props.marketsArray && this.state.zip !== '') {
      this.props.markets([]);
    }
    try {
      await navigator.geolocation.getCurrentPosition(response => {
        const { latitude, longitude } = response.coords;
        this.getNearbyMarkets(parseFloat(latitude), parseFloat(longitude));
      });
    } catch (error) {
      this.setState({ error: [...this.state.error, { error }] });
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
    const fetch = await api.marketDetails(id);
    return fetch;
  };

  render() {
    return (
      <section className="control">
        <User />
        <Link to="/market-list">
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
          <input type="submit" value="Search by ZIP" />
        </form>
      </section>
    );
  }
}

Control.propTypes = {
  markets: PropTypes.func,
  marketsArray: PropTypes.array,
  history: PropTypes.object
};

export const mapStateToProps = store => ({
  marketsArray: store.markets
});

export const mapDispatchToProps = dispatch => ({
  markets: markets => dispatch(actions.populateMarkets(markets)),
  marketDetails: (id, detail) => dispatch(actions.addDetails(id, detail))
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Control)
);
