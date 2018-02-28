import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { geoCoding } from '../../utilities/api';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {}
    };
  }

  componentDidMount() {
    this.loadMap();
    this.getCoords();
  }

  getCoords = async () => {
    try {
      const getMapCoords = await geoCoding(this.props.address);
      this.setState({ coords: getMapCoords.results[0].geometry.location });
    } catch (err) {
      // throw new Error('getCoords error', err);
    }
  };

  loadMap = () => {
    if (this.props.google) {
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      const coords = this.state.coords;
      const mapConfig = Object.assign(
        {},
        {
          center: { coords },
          zoom: 11,
          mapTypeId: 'roadmap'
        }
      );

      this.map = new maps.Map(node, mapConfig);
    }
  };

  render() {
    const style = {
      width: '250px',
      height: '250px'
    };

    return (
      <div ref="map" style={style}>
        loading map...
      </div>
    );
  }
}

Map.propTypes = {
  google: PropTypes.object,
  address: PropTypes.string
};

export default Map;
