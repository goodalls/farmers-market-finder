import React, { Component } from 'react';
import './App.css';
import * as api from '../../utilities/api';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: []
    };
  }

  componentDidMount() {
    this.initialFetch()
  }

  initialFetch() {
    const location = navigator.geolocation.getCurrentPosition(position => {
      return position;
    });

  }
  
  render() {
    return (
      <div className="App">
      Hello
      </div>
    );
  }
}

export default App;
