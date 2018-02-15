import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Control.css';

export class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: 0
    };
  }

  handleChange() {
    //setState
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    //setState of the zip
  }

  render() {
    return (
      <section className="control">
        <NavLink to={'/sign-in'}>{Sign - In}</NavLink>
        <NavLink to={'/favorites'}>{Favorites}</NavLink>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="zip" />
          <input type="number" id="zip" maxLength="5" name="zip" value={this.state.zip} onChange={this.handleChange} />
          <imput type="submit" />
        </form>
      </section>
    );
  }
}

export default Control;
