import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import * as actions from "../actions/actions";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: "#00352F"
  }
});

const validateData = function() {
  console.log("THIS: ", this);
  return (
    this.get("address") &&
    this.get("city") &&
    this.get("state") &&
    this.get("zip") &&
    this.get("timeStart") &&
    this.get("timeEnd")
  );
};

const mapStateToProps = store => ({
  createDrivewayModal: store.driveways.createDrivewayModal,
  submitError: store.driveways.submitError
});

const mapDispatchToProps = dispatch => ({
  handleOpen: () => dispatch(actions.openCreateModal()),
  handleClose: () => dispatch(actions.closeCreateModal()),
  handleSubmit: event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const form = document.querySelector("#createDrivewayForm");
    form.classList.remove("shake");
    data.isValid = validateData;
    if (data.isValid()) {
      console.log("create data is valid");
      return dispatch(actions.createDriveway(data));
    } else {
      console.log("invalid create data");
      form.classList.add("shake");
      return dispatch(actions.creationError());
    }
  }
  //     setCurrLocation: currLocation => dispatch(actions.setCurrLocation(currLocation))
});

class CreateDriveway extends Component {
  constructor(props) {
    super(props);
  }

  // handleOpen() {
  //     this.setState({createDrivewayModal: true})
  // }

  // handleClose() {
  //     this.setState({
  //         submitError: false,
  //         createDrivewayModal: false
  //     })
  // }

  // handleSubmit(e) {
  //   e.preventDefault();

  //   const form = document.querySelector('#createDrivewayForm')
  //   form.classList.remove("shake");
  //   const data = new FormData(e.target);

  //   if (data.get('address'), data.get('city'), data.get('state'),
  //       data.get('zip'), data.get("timeStart"), data.get("timeEnd")) {

  //     fetch('/createDriveway', {
  //         method: 'POST',
  //         body: data
  //     })
  //     .then(res => res.json())
  //     .then(posting => {
  //         this.setState({createDrivewayModal: false})
  //     })
  //     .catch(err => console.log(err))
  //   }
  //   else {
  //     this.setState({
  //         submitError: true,
  //     })
  //     form.classList.add("shake");
  //   }
  // }

  render() {
    const style = {
      form: {
        height: "400px",
        overflow: "scroll"
      },
      text: {
        width: 200,
        height: 30,
        margin: "10px"
      },
      pictureUpload: {
        margin: "20px"
      }
    };
    const { classes } = this.props;

    return (
      <div className="flexRow">
        <Button variant="contained" onClick={this.props.handleOpen}>
          Create Driveway!
        </Button>
        <Dialog
          open={this.props.createDrivewayModal}
          onClose={this.props.handleClose}
          id="createDrivewayForm"
          className="animated"
        >
          <DialogTitle>
            <h2 style={{ color: "#236A62" }}>Create a driveway posting.</h2>
          </DialogTitle>
          <form onSubmit={this.props.handleSubmit} style={style.form}>
            {this.props.submitError ? (
              <div>
                <Input
                  error
                  style={style.text}
                  id="address"
                  placeholder="Address"
                  name="address"
                  margin="normal"
                  className={classes.textField}
                />
                <Input
                  error
                  style={style.text}
                  id="city"
                  placeholder="City"
                  name="city"
                  margin="normal"
                  className={classes.textField}
                />
                <Input
                  error
                  style={style.text}
                  id="state"
                  placeholder="State"
                  name="state"
                  margin="normal"
                  className={classes.textField}
                />
                <Input
                  error
                  style={style.text}
                  id="zip"
                  placeholder="Zip"
                  name="zip"
                  margin="normal"
                  className={classes.textField}
                />
                <Input
                  error
                  style={style.text}
                  id="timeStart"
                  placeholder="Start Time"
                  name="timeStart"
                  margin="normal"
                  className={classes.textField}
                />
                <Input
                  error
                  style={style.text}
                  id="timeEnd"
                  placeholder="End Time"
                  name="timeEnd"
                  margin="normal"
                  className={classes.textField}
                />
              </div>
            ) : (
              <div>
                <Input
                  style={style.text}
                  id="address"
                  placeholder="Address"
                  name="address"
                  margin="normal"
                  className={classes.textField}
                />
                <Input
                  style={style.text}
                  id="city"
                  placeholder="City"
                  name="city"
                  margin="normal"
                  className={classes.textField}
                />
                <Input
                  style={style.text}
                  id="state"
                  placeholder="State"
                  name="state"
                  margin="normal"
                  className={classes.textField}
                />
                <Input
                  style={style.text}
                  id="zip"
                  placeholder="Zip"
                  name="zip"
                  margin="normal"
                  className={classes.textField}
                />
                <Input
                  style={style.text}
                  id="timeStart"
                  placeholder="Start Time"
                  name="timeStart"
                  margin="normal"
                  className={classes.textField}
                />
                <Input
                  style={style.text}
                  id="timeEnd"
                  placeholder="End Time"
                  name="timeEnd"
                  margin="normal"
                  className={classes.textField}
                />
              </div>
            )}
            <Input
              style={style.text}
              id="rateDay"
              placeholder="Daily Rate"
              name="rateDay"
              margin="normal"
              className={classes.textField}
            />
            <Input
              style={style.text}
              id="rateHour"
              placeholder="Hourly Rate"
              name="rateHour"
              margin="normal"
              className={classes.textField}
            />
            <input
              id="drivewayImage"
              type="file"
              name="photo"
              accept=".png, .jpg, .jpeg"
              style={style.pictureUpload}
            />
            <div className="flexRow" style={{ marginTop: 20 }}>
              <Button variant="contained" onClick={this.props.handleClose}>
                Close
              </Button>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
            <div style={{ width: "100%", height: "40px" }} />
          </form>
        </Dialog>
      </div>
    );
  }
}

// export default withStyles(styles)(AddDriveway);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateDriveway));
