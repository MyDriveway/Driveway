import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Card from '../components/DrivewayCard.jsx';

//grab state from search
const mapStateToProps = store => ({
  locations: store.searches.locations,
});

const mapDispatchToProps = dispatch => ({
  setMarkers: (markers) => dispatch(actions.setMarkers(markers))
});

class Results extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let cards = [];
    let markers = []
    if (this.props.locations) {
      //creating the cards
      cards = this.props.locations.map((driveway, i) => {
        //creating the marker objects for the map
        const lat = driveway.geometry.coordinates[1];
        const lng = driveway.geometry.coordinates[0];
        markers.push({
          id: driveway._id, 
          position: { lat, lng },
        })

        return (
          <Card obj={driveway} key={i}/>
        )
      })
    }

    //send the marker objects to the store
    this.props.setMarkers(markers);

    return(
      <div className='resultsWrapper'>
        {cards}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);