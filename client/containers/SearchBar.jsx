import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
//import actions from action creators file
import * as actions from '../actions/actions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
//import child components

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
  locations: store.searches.locations
});

const mapDispatchToProps = dispatch => ({
  addSearch: userInput => dispatch(actions.addSearch(userInput)),
  addLocations: locations => dispatch(actions.addLocations(locations))
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
    const input = this.props.userInput.toLowerCase();
    const result= {};
    // check first element of input to distinguish from address, city, or zipcode
    // if first element of the userinput is not a number, it's a city
    console.log('initial handle search', input);
    if(isNaN(parseInt(input.charAt(0)))) {
      // grab city
      result.city = input;
    }else {
      // check the length of the userInput to distinguish zipcode or street address
      // if > 5, street address
      if(input.length > 5) {
        // grab address
        result.address = input;
      }else {
        // grab zipcode
        result.zip = Number(input);
      }
    }
    
    console.log('result inside client side', result);
    
    fetch('/searchAddress', 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(result)
    })
    .then(response => response.json())
    .then(data => this.props.addLocations(data))
    .catch(err => {
      return err;
    })
  }
  
  // set the state for the user's input from the search bar
  handleChange(event) {
    console.log(`input ${event.target.value}`);
    this.props.addSearch(event.target.value);
    console.log(`username hererereer ${this.props.userInput}`)
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