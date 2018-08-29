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
  //TODO:
  //pan map to new created location
  handleOpen: () => dispatch(actions.openCreateModal()),
  handleClose: () => dispatch(actions.closeCreateModal()),
  handleSubmit: event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const form = document.querySelector("#createDrivewayForm");
    form.classList.remove("shake");
    data.isValid = validateData;
    if (data.isValid()) {
      return dispatch(actions.createDriveway(data));
    } else {
      form.classList.add("shake");
      return dispatch(actions.creationError());
    }
  }
});

class CreateDriveway extends Component {
  constructor(props) {
    super(props);
  }

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
          <DialogTitle style={{ color: "#236A62" }}>
            Create a driveway posting.
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
                  className={classes.textField}
                />
                <Input
                  error
                  style={style.text}
                  id="city"
                  placeholder="City"
                  name="city"
                  className={classes.textField}
                />
                <Input
                  error
                  style={style.text}
                  id="state"
                  placeholder="State"
                  name="state"
                  className={classes.textField}
                />
                <Input
                  error
                  style={style.text}
                  id="zip"
                  placeholder="Zip"
                  name="zip"
                  className={classes.textField}
                />
                <Input
                  error
                  style={style.text}
                  id="timeStart"
                  placeholder="Start Time"
                  name="timeStart"
                  className={classes.textField}
                />
                <Input
                  error
                  style={style.text}
                  id="timeEnd"
                  placeholder="End Time"
                  name="timeEnd"
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
                  className={classes.textField}
                />
                <Input
                  style={style.text}
                  id="city"
                  placeholder="City"
                  name="city"
                  className={classes.textField}
                />
                <Input
                  style={style.text}
                  id="state"
                  placeholder="State"
                  name="state"
                  className={classes.textField}
                />
                <Input
                  style={style.text}
                  id="zip"
                  placeholder="Zip"
                  name="zip"
                  className={classes.textField}
                />
                <Input
                  style={style.text}
                  id="timeStart"
                  placeholder="Start Time"
                  name="timeStart"
                  className={classes.textField}
                />
                <Input
                  style={style.text}
                  id="timeEnd"
                  placeholder="End Time"
                  name="timeEnd"
                  className={classes.textField}
                />
              </div>
            )}
            <Input
              style={style.text}
              id="rateDay"
              placeholder="Daily Rate"
              name="rateDay"
              className={classes.textField}
            />
            <Input
              style={style.text}
              id="rateHour"
              placeholder="Hourly Rate"
              name="rateHour"
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
