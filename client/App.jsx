import React, { Component } from "react";
import { connect } from 'react-redux';
import AddDriveway from "./containers/addDriveway.jsx"
import GoogleMapsContainer from './containers/GoogleMapsContainer.jsx'
import Results from './containers/Results.jsx';
import Snackbar from '@material-ui/core/Snackbar';


import Login from './containers/Login.jsx';
import * as actions from './actions/actions'

const mapStateToProps = store => ({
  loggedIn: store.login.loggedIn
})

const mapDispatchToProps = dispatch => ({
  setLogin: (bool) => dispatch(actions.setLogin(bool))
})

class App extends Component {
  constructor(props) {
    super(props);
  }

  // -----> wait for logout button
  // componentWillMount() {
  //   fetch('/checkForSession')
  //   .then((response) => {
  //     if (response.status === 200) this.props.setLogin(true);
  //   }).catch((err) => console.log(err));
  // }

  render() {
    const style = {
      title: {
        fontSize: '3.5em',
        color: '#f4f4f4',
        letterSpacing: '5px',
        fontFamily: 'cursive'
      },
      fakeMap: {
        width: '45%',
        height: '80vh',
        backgroundColor: 'black'
      }
    }

    return (
      <div>
        {this.props.loggedIn ? (
        <div class="bgimage">
          <div id="app-container">
            <div className='componentWrapper'>
              <div className='flexRow' style={{height: '125px'}}>
                {window.innerWidth > 700 && <div style={{width: '150px'}}/>}
                <h1 style={style.title}>Driveway</h1>
                <AddDriveway />
              </div>
              <div className="flexRow">
                <Results />
                {/* <div >
                  <GoogleMapsContainer />
                </div> */}
                <div style={style.fakeMap}>test</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
             <Login />
        </div>
        )}
      </div>
    );

  // render() {
  //   if (this.props.loggedIn) {
  //     return (
  //       <div id="app-container">
  //         <AddDriveway />
  //         <GoogleMapsContainer />
  //         <Results />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <Login />
  //       </div>
  //     );
  //   }
  // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);