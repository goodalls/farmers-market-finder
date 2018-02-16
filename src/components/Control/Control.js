import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Control.css';

export class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      searchByZip: false,
      searchByLocation: false
    };
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ zip: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('handleSubmit');
    this.setState({
      searchByZip: true,
      searchByLocation: false
    });
  };

  handleCurrentLocation = event => {
    this.setState({ 
      searchByZip: false, 
      searchByLocation: true 
    });
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
            placeHolder="ZIP"
          />
          <input type="submit" />
        </form>
      </section>
    );
  }
}

export default Control;
