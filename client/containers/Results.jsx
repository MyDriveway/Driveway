import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import actions from action creators file
import * as actions from '../actions/actions';
import Card from '../components/DrivewayCard.jsx';

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({});
//try to style this Results container so that its size is flexible
//between a min width and a max width

class Results extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    //for each database entry, render a new MediaCard
    const allResults = () => {
    let cards = [];
      for (let i = 0; i < 10; i++) {
        cards.push(<Card/>);
      }
      return cards;
    }
    return(
      <div>
        {allResults()}
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Results);