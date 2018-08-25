import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

// to get the google api
import { API } from '../../clientENV/api.js'

const mapStateToProps = (store, ownProps) => ({
  // provide pertinent state here
  allMarkers: store.map.allMarkers,
  selectedMarker: store.map.selectedMarker,
  google: ownProps.google,
  currLocation: store.map.currLocation
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
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }

    //create an array of the Marker components
    const markers = this.props.allMarkers.map((marker, i) => (
      <Marker key={i} onClick={this.onMarkerClick} position={marker.position}> </Marker>
    ))

    return (
      <div>
        { this.props.currLocation &&
        <Map
          item
          xs = { 6 }
          style = { style }
          google = { this.props.google }
          onClick = { this.onMapClick }
          zoom = { 11 }
          initialCenter = {{ lat: 34.05223, lng: -118.24368 }}
          // initialCenter = {{ lat: this.props.currLocation.latitude, lng: this.props.currLocation.longitude }}
        >
          {markers}
        </Map> }
      </div>
        
    );
  }
}
// actual API needs to be substituted in
export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({ apiKey: API})(GoogleMapsContainer));

