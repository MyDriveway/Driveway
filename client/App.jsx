import React, { Component } from "react";
import AddDriveway from "./containers/addDriveway.jsx"
import GoogleMapsContainer from './containers/GoogleMapsContainer.jsx'
import Results from './containers/Results.jsx';
import Snackbar from '@material-ui/core/Snackbar';



class App extends Component {
  constructor(props) {
    super(props);
  }

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
              <div >
                <GoogleMapsContainer />
              </div>
              {/* <div style={style.fakeMap}>test</div> */}
            </div>
          </div>
        </div>
        {/* <Snackbar
          anchorOrigin={ 'bottom', 'center' }
          open={""} //boolean state
          onClose={""} //close function
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id"></span>} //message string
        /> */}
      </div>
    );
  }
}

export default App;