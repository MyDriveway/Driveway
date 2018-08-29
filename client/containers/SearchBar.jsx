import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "@material-ui/core/Input";
//import actions from action creators file
import * as actions from "../actions/actions";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: "#236A62",
    backgroundColor: "#f4f4f4",
    height: 36,
    borderRadius: "5px",
    width: "30vw"
  }
});

const mapStateToProps = store => ({
  searchInput: store.map.searchInput,
  locations: store.map.locations,
  focus: store.map.focus
});

const mapDispatchToProps = dispatch => ({
  handleChange: event =>
    dispatch(actions.updateSearchInput(event.target.value)),
  handleSubmit: input => {
    //retrieve locations near inputted address in search bar and update list.
    fetch(`/searchAddress/${input}`)
      .then(response => response.json())
      .then(data => dispatch(actions.storeSearchResults(data))
    ).catch(err => {
        return err;
      });
  },
  setFocus: coords => dispatch(actions.setFocus(coords))
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  // set the state for the user's input from the search bar

  render() {
    const { classes } = this.props;
    const style = {
      text: {
        marginTop: "-10px"
      }
    };
    return (
      <div className="flexRow">
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.handleSubmit(this.props.searchInput);
          }}
          className="flexRow"
        >
          <Input
            placeholder="Driveway"
            onChange={this.props.handleChange}
            margin="none"
            className={classes.textField}
          />
          <Button
            variant="contained"
            type="submit"
            style={{ marginLeft: "2.5" }}
          >
            Search
          </Button>
        </form>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SearchBar));
