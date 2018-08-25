import React, { Component } from "react";
import SearchBar from './containers/SearchBar.jsx';
//import a wrapper
import AddDriveway from "./containers/addDriveway.jsx"
import GoogleMapsContainer from './containers/GoogleMapsContainer.jsx'
import Results from './containers/Results.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="app-container">
        H3llo from react
        <SearchBar />
        {/* <AddDriveway /> */}
        {/* <GoogleMapsContainer /> */}
        <Results />
      </div>
    );
  }
}

export default App;