import React, { Component } from 'react';
import * as actions from '../../actions/actions';
import Container from '../Container/Container';
import * as api from '../../utilities/api';
import { Route, withRouter } from 'react-router-dom';
import Control from '../Control/Control';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Why from '../WhyQuotes/Why';
import '../../styles/colors.css';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="background-wrapper">
        <div className="app">
          <Header />
          <Control />
          <Route exact path="/" component={Why} />
          <Route path="/market-list" component={Container} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => ({});

export const mapDispatchToProps = dispatch => ({});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
