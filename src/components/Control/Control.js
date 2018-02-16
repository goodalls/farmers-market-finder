import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Control.css';

export class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: ''
    };
  }

  handleChange = (event) => {
    const {value} = event.target;
    
    this.setState({zip: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    //setState of the zip
  }
  render() {

    return (
      <section className="control">
        {/* <NavLink to={'/sign-in'}>{Sign - In}</NavLink>
        <NavLink to={'/favorites'}>{Favorites}</NavLink> */}
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="zip" />
          <input type="number" id="zip" maxLength="5" name="zip" value={this.state.zip} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </section>
    );
  }
}

export default Control;
