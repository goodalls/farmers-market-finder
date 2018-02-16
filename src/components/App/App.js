import React, { Component } from 'react';
import * as actions from '../../actions/actions';
import * as api from '../../utilities/api';
import Control from '../Control/Control';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import Why from '../WhyQuotes/Why';
import '../../styles/colors.css';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: [],
    };
  }

  componentDidMount() {}

  

  render() {
    return (
      <div className="background-wrapper">
        <div className="app">
          <Header />
          <Control />
          <Route path="/" component={Why} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => ({});

export const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(App);
