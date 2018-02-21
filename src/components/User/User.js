import React, { Component } from 'react';
import './User.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      name: '',
      email: '',
      password: '',
      favorites: []
    };
  }
  componentDidMount() {
    this.userUpdater();
  }

  userUpdater() {
    //check localstorage if user then set to store and state
    //should be able to update localstorage when favotrites added via store(props did change)
  }

  addFavorites() {
    // add favorites to the array should match the localstorage and store
    // may not need to be in this section
  }

  handleInputs = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  loginUser() {
    return (
      <form onSubmit={this.props.user}>
        <label htmlFor='name'/>
        <input id='name'name="name" type="text" placeholder='Name' onChange={this.handleInputs} value={this.state.name} />
        <label htmlFor='password'/>
        <input id='password'name="password" type="password" placeholder='Password'onChange={this.handleInputs} value={this.state.password} />
        <label htmlFor='submit'/>
        <input id='submit'type='submit' value='Submit' />
        <label htmlFor='create-acct'/>
        <input id='create-acct'type='submit' value='Create Account' onClick={this.createUser}/>
      </form>
    );
    //needs a create user button when clicked sets state to 'CREATE_USER'
    //save to localstorage
  }

  logoutUser() {
    // sets state and store to 'LOGGED_OUT'
    // should have an element of favorites clickable
  }

  createUser() {
    return (
      <form onSubmit={this.props.user}>
        <label htmlFor='name'/>
        <input id='name'name="name" type="text" value={this.state.name} />
        <label htmlFor='email'/>
        <input id='email'name="email" type="text" value={this.state.email} />
        <label htmlFor='password'/>
        <input id='password'name="password" type="password" value={this.state.password} />
        <label htmlFor='submit'/>
        <input id='submit'type='submit' value='Submit' />
      </form>
    );
    //save to LocalStorage
  }

  renderCheck = user => {
    switch (user.status) {
      case 'LOGGED_IN':
        return this.logoutUser();
      case 'LOGGED_OUT':
        return this.loginUser();
      case 'CREATE_USER':
        return this.createUser();
      default:
        return this.loginUser();
    }
  };
  render() {
    return <div className="user">{this.renderCheck(this.state)}</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(User);
