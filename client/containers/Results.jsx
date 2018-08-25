import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import actions from action creators file
import * as actions from '../actions/actions';
import Card from '../components/DrivewayCard.jsx';
//grab state from search
const mapStateToProps = store => ({
  locations: store.searches.locations,
});

const mapDispatchToProps = dispatch => ({});
//try to style this Results container so that its size is flexible
//between a min width and a max width

class Results extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log('location stuff', this.props);
    return(
      <div>
        {this.props.locations && this.props.locations.map((driveway, i) => {
          return (
            <Card obj={driveway} key={i}/>
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);