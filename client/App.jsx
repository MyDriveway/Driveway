import React, { Component } from "react";
import AddDriveway from "./containers/addDriveway.jsx"
//import a wrapper

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="app-container">
      H3llo from react
      <AddDriveway />
      </div>
    );
  }
}

export default App;