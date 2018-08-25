import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
//import actions from action creators file
import * as actions from '../actions/actions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: '#236A62',
    backgroundColor: '#f4f4f4',
    height: 36,
    borderRadius: '5px',
    width: '30vw'
  }
});

const mapStateToProps = store => ({
  userInput: store.searches.userInput,
  locations: store.searches.locations,
  currLocation: store.map.currLocation
});

const mapDispatchToProps = dispatch => ({
  addSearch: userInput => dispatch(actions.addSearch(userInput)),
  addLocations: locations => dispatch(actions.addLocations(locations)),
  setCurrLocation: currLocation => dispatch(actions.setCurrLocation(currLocation))
});

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  // make a post request to extract actual address from google maps through the backend
  handleSearch(event) {
    event.preventDefault();    
    const input = this.props.userInput;
    
    fetch(`/searchAddress/${input}`)
    .then(response => response.json())
    .then(data => {
      this.props.addLocations(data.results);
      this.props.currLocation(data.coords);
    })
    .catch(err => {
      return err;
    })
  }
  
  // set the state for the user's input from the search bar
  handleChange(event) {
    this.props.addSearch(event.target.value);
  }

  render() { 
    const { classes } = this.props;
    const style = {
      text: {
        marginTop: '-10px',
      }
    }
    return(
      <div className='flexRow'>
        <form onSubmit={this.handleSearch} className='flexRow'>
          <Input
              placeholder='Driveway'
              onChange={this.handleChange}
              margin='none'
              className={classes.textField}
          />
          <Button variant="contained" type='submit' style={{marginLeft: '2.5'}}>Search</Button>
        </form>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchBar));