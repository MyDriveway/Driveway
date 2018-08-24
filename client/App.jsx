import React, { Component } from "react";
import Results from './containers/Results.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="app-container">
      H3llo from react
        <Results />
      </div>
    );
  }
}

export default App;