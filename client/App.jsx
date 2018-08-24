import React, { Component } from "react";
import GoogleMapsContainer from './containers/GoogleMapsContainer.jsx'
//import a wrapper
import Results from './containers/Results.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="app-container">
      H3llo from react
        <GoogleMapsContainer />
        
        <Results />
      </div>
    );
  }
}

export default App;