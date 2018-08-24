import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
// import { typography } from 'material-ui/styles';

const mapStateToProps = (store, ownProps) => ({
  // provide pertinent state here
  showingInfoWindow: store.map.showingInfoWindow,
  activeMarker: store.map.activeMarker,
  addSelectedPlace: store.map.addSelectedPlace,
  google: ownProps.google
});

const mapDispatchToProps = dispatch => ({});

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick (props) {
    if (this.props.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    const style = {
      width: '90%',
      height: '55vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }

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
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 39.648209, lng: -75.711185 }}
          name = { 'Changing Colors Garage' }
        />
        {/* <InfoWindow
          marker = { this.props.activeMarker }
          visible = { this.props.showingInfoWindow }
        > */}
          {/* <Paper>
            <Typography
              variant = 'headline'
              component = 'h4'
            >
              Changing Colors Garage
            </Typography>
            <Typography
              component = 'p'
            >
              98G Albe Dr Newark, DE 19702 <br />
              302-293-8627
            </Typography>
          </Paper> */}
        {/* </InfoWindow> */}
      </Map>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({ apiKey: "AIzaSyALsPkcR2ebrrWQt1HVj1YdgdO0RAyoBuQ"})(GoogleMapsContainer));

