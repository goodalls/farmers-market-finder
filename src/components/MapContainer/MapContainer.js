import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from '../Map/Map';
import './MapContainer.css';

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyBvfTcCOD9GiniyDDDmI4TuLefT_WTN15c'})(MapContainer);
