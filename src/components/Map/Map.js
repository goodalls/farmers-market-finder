import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MapContainer extends Component {
  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks to make sure that props have been passed
      const { google } = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign(
        {},
        {
          center: { lat: 40.7485722, lng: -74.0068633 }, // sets center of google map to NYC.
          zoom: 11, // sets zoom. Lower numbers are zoomed further out.
          mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
        }
      );

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.
    }
  }

  render() {
    const style = {
      // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '90vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    };

    return (
      // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    );
  }
}

// import React, { Component } from 'react';

// export class Map extends Component {
//   componentDidMount() {
//     // this.populateMap()
//   }

//   populateMap = () => {
//     // const map = new google.maps.Map () // do the map thing
//     // this.props.locations.map(locationInfo => {
//     //   let marker = // maker is done
//     //   marker.setMap(map)
//     // })
//     // create an instane of the map
//     // take an array of coords info
//     // if I can map through that array and create a new marker for every coords
//     // as you are mapping thought the array of things
//     // create a marker
//     // take the maker and place it on the map.
//     // then I can take that marker and place it on the map
//   };

//   render() {
//     return <div id='map'>Map</div>;
//   }
// }

// export default Map;
