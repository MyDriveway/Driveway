import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

const mapStateToProps = (store, ownProps) => ({
  // provide pertinent state here
  allMarkers: store.map.allMarkers,
  selectedMarker: store.map.selectedMarker,
  google: ownProps.google
});

const mapDispatchToProps = dispatch => ({
  dispatchOnMarkerClick: (props) => dispatch(actions.selectMarker(props)),
  dispatchOnMapClick: () => dispatch(actions.deselect()),
});

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.props.dispatchOnMarkerClick(props);
  }

  onMapClick (props) {
    this.props.dispatchOnMapClick();
  }

  render() {
    const style = {
      width: '45%',
      height: '80vh',
      position: 'relative'
    }

    //create an array of the Marker components
    const markers = this.props.allMarkers.map((marker, i) => (
      <Marker key={i} onClick={this.onMarkerClick} position={marker.position}> </Marker>
    ))

    return (
        <Map
          item
          xs = { 6 }
          style = { style }
          google = { this.props.google }
          onClick = { this.onMapClick }
          zoom = { 14 }
          initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
        >
          {markers}
        </Map>
    );
  }
}
// actual API needs to be substituted in
export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({ apiKey: 'dummy'})(GoogleMapsContainer));

