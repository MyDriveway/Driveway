import React, { Component } from "react";
import GoogleMapsContainer from './containers/GoogleMapsContainer.jsx'
//import a wrapper
import Results from './containers/Results.jsx';
import Login from './containers/Login.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  render() {

    if (this.state.loggedIn) {
      return (
        <div id="app-container">
          <GoogleMapsContainer />
          <Results />
        </div>
      );
    } else {
      return (
        <div id="app-container">
          <Login />
        </div>
      );
    }
  }
}

export default App;