import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

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
  dispatchOnMarkerClick: (id) => dispatch(actions.selectMarker(id)),
  dispatchOnMapClick: () => dispatch(actions.deselect()),
});

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick(marker) {
    const id = marker.id; //broken---------------------------
    // when we click on a marker on the map, the return object doesn't have
    // the id value that I was trying to pass in
    this.props.dispatchOnMarkerClick(id);
  }

  // unnecessary, can go straight to dispatch
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
      <Marker key={marker.id} id={marker.id} onClick={this.onMarkerClick} position={marker.position}> </Marker>
    ));

    //this can eventually go in it's on file as a component
    const GoogleMapComponent = withScriptjs(withGoogleMap(props => (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 33.9850, lng: -118.4695 }}
      >
        {markers}
      </GoogleMap>
    )));

    return(
      <div>
        <GoogleMapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMapsContainer);

