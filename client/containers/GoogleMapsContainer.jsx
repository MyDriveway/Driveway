import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker
} from "react-google-maps";

// to get the google api
import { API } from "../../clientENV/api.js";

const mapStateToProps = (store, ownProps) => ({
  // provide pertinent state here
  allMarkers: store.map.allMarkers,
  selectedMarker: store.map.selectedMarker,
  google: ownProps.google,
  focus: store.map.focus
});

const mapDispatchToProps = dispatch => ({
  onMarkerClick: event => dispatch(actions.selectMarker(event.target.id)),
  onMapClick: () => dispatch(actions.deselectMarker())
});

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this._map = React.createRef();
  }

shouldComponentUpdate(nextProps){
  if(this._map.current && nextProps.focus){
    console.log('FOCUS!!!: ', nextProps.focus);
    this._map.current.panTo(nextProps.focus);
  }

  return true;
}



  render() {
    const style = {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0
    };

    const GoogleMapComponent = withScriptjs(
      withGoogleMap(props => {
        //create an array of the Marker components
        const markers = props.allMarkers.map((marker, i) => (
          <Marker
            key={marker.id}
            id={marker.id}
            onClick={props.handleMarkerClick}
            position={marker.position}
          >
            {" "}
          </Marker>
        ));

        let map = (
          <GoogleMap
            ref={this._map}
            defaultZoom={13}
            defaultCenter={{ lat: 33.985, lng: -118.4695 }}
          >
            {markers}
          </GoogleMap>
        );
        
        return map;
      })
    );

    return (
      <div>
        <GoogleMapComponent
          allMarkers={this.props.allMarkers}
          handleMarkerClick={this.props.handleMarkerClick}
          handleMapClick={this.props.handleMapClick}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapsContainer);
