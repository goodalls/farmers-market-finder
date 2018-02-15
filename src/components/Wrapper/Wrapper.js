import React, { Component } from 'react';
import key from '../../../key';

export class Wrapper extends Component {
  render() {
    return (
      <div>
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=${key}`} />
      </div>
    )
  }
}

export default Wrapper;
