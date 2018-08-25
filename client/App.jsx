import React, { Component } from "react";
import { connect } from 'react-redux';
import SearchBar from './containers/SearchBar.jsx';
import AddDriveway from "./containers/addDriveway.jsx"
import GoogleMapsContainer from './containers/GoogleMapsContainer.jsx'
import Results from './containers/Results.jsx';
import Snackbar from '@material-ui/core/Snackbar';
import Logout from './components/Logout.jsx'


import Login from './containers/Login.jsx';
import * as actions from './actions/actions'

const mapStateToProps = store => ({
  loggedIn: store.login.loggedIn,
  currLocation: store.map.currLocation
})

const mapDispatchToProps = dispatch => ({
  setLogin: (bool) => dispatch(actions.setLogin(bool)),
  setCurrLocation: (currLocation) => dispatch(actions.setCurrLocation(currLocation)),
  addLocations: locations => dispatch(actions.addLocations(locations)),
})

class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  // navigates away from login page if a session already exists
  componentDidMount() {
    fetch('/checkForSession')
    .then((response) => {
      if (response.status === 200) this.props.setLogin(true);

      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          fetch(`/api/search/${longitude}/${latitude}`)
            .then(response => response.json())
            .then(data => {
              this.props.setCurrLocation({latitude: latitude, longitude: longitude})
              this.props.addLocations(data)
            })
            .catch(err => console.error(err))
        }
      )
      
    }).catch((err) => console.log(err));
  }

  // deletes a session and navigates user to login page
  logout(e) {
    e.preventDefault();
    fetch('/endSession')
    .then(response => {
      this.props.setLogin(false);
    }).catch(err => {
      this.props.setLogin(false);
      console.log(err);
    })
  }

  render() {
    const style = {
      logo: {
        width: '60px'
      }
    }

    return (
      <div>
         {/* to bypass the login page, add '!' before this.props.loggedIn */}
        {this.props.loggedIn ? ( // if a session exists then go straight to map page
        <div className="bgimage">
          <div id="app-container" >
            <div className='componentWrapper'>
              <div className='flexRow header'>
                <img style={style.logo} src='./image/logo.png'/>
                <h1 className='title'>Driveway</h1>
                <Logout onClick={this.logout}/>
              </div>
              <div className='flexRow inputSection'>
                <SearchBar />
                <AddDriveway />
              </div>
              <div className="flexRow" style={{width: '100%', marginTop: 20}}>
                <div className='mapWrapper'>
                  <GoogleMapsContainer />
                </div>
                <Results />
              </div>
            </div>
          </div>
        </div>
      ) : ( // if no session exists, render login page
        <div>
          <Login />
        </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);