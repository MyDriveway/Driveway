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
  google: ownProps.google
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
    this.props.dispatchOnMarkerClick(id);
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
      <Marker key={marker.id} title={marker.id} onClick={this.onMarkerClick} position={marker.position}> </Marker>
    ));

    const GoogleMapComponent = withScriptjs(withGoogleMap(props => (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 34.05223, lng: -118.24368 }}
      >
        {markers}
      </GoogleMap>
    )));

    return(
      <div>
        <GoogleMapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMapsContainer);

