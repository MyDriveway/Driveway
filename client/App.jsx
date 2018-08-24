import React, { Component } from "react";
import GoogleMapsContainer from './containers/GoogleMapsContainer.jsx'
//import a wrapper

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="app-container">
        <GoogleMapsContainer />
      </div>
    );
  }
}

export default App;