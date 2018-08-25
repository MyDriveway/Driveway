import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class AddDriveway extends Component{
    constructor(props) {
        super(props)
        this.state = {
           createDrivewayModal: false,
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleOpen() {
        this.setState({createDrivewayModal: true})
    }

    handleClose() {
        this.setState({createDrivewayModal: false})
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        fetch('/createDriveway', {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then(posting => console.log(posting))
        .catch(err => console.log(err))
    }

    render() {
        const style = {
            form: {
              height: '400px',
              overflow: 'scroll',
            },
            text: {
              width: 200,
              height: 30,
              margi: '10px',
            }
          }
          
        return (
            <div className='flexRow'>
                <Button variant="contained" onClick={this.handleOpen}>
                    Create Driveway!
                </Button>
                <Dialog
                open={this.state.createDrivewayModal}
                onClose={this.handleClose}
                >
                <DialogTitle>{"Create a driveway posting."}</DialogTitle>
                <form onSubmit={this.handleSubmit} style={style.form}>
                    <TextField
                        style={style.text}
                        id="address"
                        label="Address"
                        name="address"
                        margin="normal"
                    />
                    <TextField
                        style={style.text}
                        id="city"
                        label="City"
                        name="city"
                        margin="normal"
                    />
                    <TextField
                        style={style.text}
                        id="state"
                        label="State"
                        name="state"
                        margin="normal"
                    />
                    <TextField
                        style={style.text}
                        id="zip"
                        label="Zip"
                        name="zip"
                        margin="normal"
                    />
                    <TextField
                        style={style.text}
                        id="timeStart"
                        label="Start Time"
                        name="timeStart"
                        margin="normal"
                    />
                    <TextField
                        style={style.text}
                        id="timeEnd"
                        label="End Time"
                        name="timeEnd"
                        margin="normal"
                    />
                    <TextField
                        style={style.text}
                        id="rateDay"
                        label="Dailey Rate"
                        name="rateDay"
                        margin="normal"
                    />
                    <TextField
                        style={style.text}
                        id="rateHour"
                        label="Hourly Rate"
                        name="rateHour"
                        margin="normal"
                    />
                    <input 
                        id="drivewayImage"
                        type="file"
                         name="photo"
                         accept=".png, .jpg, .jpeg"
                    />
                    <div className='flexRow'>
                        <Button onClick={this.handleClose}>Close</Button>
                        <Button type='submit'>Submit</Button>
                    </div>
                </form>
                {/* <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                    Disagree
                    </Button>
                    <Button type='submit' color="primary" autoFocus>
                    Agree
                    </Button>
                </DialogActions> */}
                </Dialog>
            </div>
        )
    }
}

export default AddDriveway;