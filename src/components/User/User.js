import React, { Component } from 'react';
import * as actions from '../../actions/actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './User.css';

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
    if (localStorage.user) {
      const get = localStorage.getItem('user');
      const user = JSON.parse(get);
      this.setState({ ...user, status: 'LOGGED_IN' });
      this.props.loginUser({ ...user, status: 'LOGGED_IN' });
    }
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
        <Link to="/favorite">
          <button className="favorites">
            favorites {this.props.user.favorites.length}
          </button>
        </Link>
        <div>
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
              // this.props.history.push('/');
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }

  createUser = () => {
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
  };

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
    return <div>{this.renderCheck(this.state)}</div>;
  }
}

User.propTypes = {
  history: PropTypes.object,
  logOutUser: PropTypes.func,
  loginUser: PropTypes.func,
  updateUser: PropTypes.func,
  user: PropTypes.object
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(actions.loginUser(user)),
  logOutUser: () => dispatch(actions.logOutUser()),
  updateUser: user => dispatch(actions.updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
