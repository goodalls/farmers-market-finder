import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from '../Map/Map';
import './MapContainer.css';
import PropTypes from 'prop-types';
import { key } from '../../key';

class MapContainer extends Component {
  render() {
    const { google, address } = this.props;
    return (
      <div className="map" id="map">
        <Map google={google} address={address} />
      </div>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object,
  address: PropTypes.string
};

export default GoogleApiWrapper({
  apiKey: key
})(MapContainer);
