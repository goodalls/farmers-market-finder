import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from '../Map/Map';
import './MapContainer.css';
import PropTypes from 'prop-types';

export class MapContainer extends Component {
  render() {
    return (
      <div className="">
        <Map google={this.props.google} />
      </div>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBvfTcCOD9GiniyDDDmI4TuLefT_WTN15c'
})(MapContainer);
