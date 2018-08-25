import React, { Component } from "react";
import { connect } from 'react-redux';
import AddDriveway from "./containers/addDriveway.jsx"
import GoogleMapsContainer from './containers/GoogleMapsContainer.jsx'
import Results from './containers/Results.jsx';
import Login from './containers/Login.jsx';

const mapStateToProps = store => ({
  loggedIn: store.login.loggedIn
})

const mapDispatchToProps = dispatch => ({})

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div id="app-container">
          <AddDriveway />
          <GoogleMapsContainer />
          <Results />
        </div>
      );
    } else {
      return (
        <div>
          <Login />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);