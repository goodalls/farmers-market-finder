import React, { Component } from 'react';
import './User.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/actions';

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
    if (localStorage.length) {
      const get = localStorage.getItem('user');
      const user = JSON.parse(get);
      this.setState({ ...user, status: 'LOGGED_IN' });
      this.props.loginUser({ ...user, status: 'LOGGED_IN' });
    }
    //should be able to update localstorage when favotrites added via store(props did change)
  }

  addFavorites() {
    // add favorites to the array should match the localstorage and store
    // may not need to be in this section
  }

  handleInputs = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  loginUser() {
    return (
      <div className="user">
        <h4>Login</h4>
        <form onSubmit={this.saveUser}>
          <label htmlFor="name" />
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputs}
            value={this.state.name}
          />
          <label htmlFor="password" />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputs}
            value={this.state.password}
          />
          <label htmlFor="submit" />
          <input id="submit" type="submit" value="Submit" />
          <label htmlFor="create-acct" />
          <input
            id="create-acct"
            type="submit"
            value="Create Account"
            onClick={this.createUser}
          />
        </form>
      </div>
    );
  }

  logoutUser() {
    return (
      <div className="user">
        <h4>Welcome back {this.state.name}</h4>
        <Link to='/favorites'>
          <button className="favorites">favorites {this.state.favorites.length}</button>
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem('user');
            this.setState({
              status: '',
              name: '',
              email: '',
              password: '',
              favorites: []
            });
            this.props.logOutUser();
          }}
        >
          Log Out
        </button>
      </div>
    );
  }

  createUser() {
    if (this.state.status !== 'CREATE_USER') {
      this.setState({ status: 'CREATE_USER' });
      this.props.updateUser({ status: 'CREATE_USER' });
    } else {
      return (
        <div className="user">
          <form onSubmit={this.saveUser}>
            <label htmlFor="name" />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              onChange={this.handleInputs}
              value={this.state.name}
            />
            <label htmlFor="email" />
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={this.handleInputs}
              value={this.state.email}
            />
            <label htmlFor="password" />
            <input
              id="password"
              name="password"
              type="text"
              placeholder="Password"
              onChange={this.handleInputs}
              value={this.state.password}
            />
            <label htmlFor="submit" />
            <input id="submit" type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }

  saveUser = () => {
    const stringify = JSON.stringify(this.state);
    localStorage.setItem('user', stringify);
    this.setState({ status: 'LOGGED_IN' });
    this.props.loginUser(this.state);
  };

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

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(actions.loginUser(user)),
  logOutUser: () => dispatch(actions.logOutUser()),
  updateUser: user => dispatch(actions.updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
