import React, { Component } from "react";
import SearchBar from './containers/SearchBar.jsx';
//import a wrapper

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="app-container">
      H3llo from react
      <SearchBar />
      </div>
    );
  }
}

export default App;