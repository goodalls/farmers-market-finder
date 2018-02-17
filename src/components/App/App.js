import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as actions from '../../actions/actions';
import Container from '../Container/Container';
import * as api from '../../utilities/api';
import Control from '../Control/Control';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import Why from '../WhyQuotes/Why';
import '../../styles/colors.css';
import './App.css';
import TextCard from '../TextCard/TextCard';

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
          <Route path="/single-market" component={TextCard} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => ({});

export const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
