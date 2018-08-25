import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as actions from '../actions/actions';

const styles = {
  card: {
    marginBottom: 30,
    boxShadow: '0 0 20px black'
  },
  media: {
    height: 40,
  },
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchOnMarkerClick: (props) => dispatch(actions.selectMarker(props)),
});

class MediaCard extends Component {
  constructor(props) {
    super(props);
    this.onShowOnMapClick = this.onShowOnMapClick.bind(this);
  }

  onShowOnMapClick() {
    //props.obj is the obj containing all the info of that driveway
    //props.key gives the unique _id from the database
    this.props.dispatchOnMarkerClick(this.props.obj._id);
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} key={this.props.key}>
        <CardMedia
          className={classes.media}
          // grab the image from the database through props
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.obj.address}
          </Typography>
          <Typography component="p">
            Daily Rate: ${this.props.obj.rateDay}
            <br />
            Hourly Rate: ${this.props.obj.rateHour}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary"
            onClick={this.onShowOnMapClick}
          > 
            Show On Map
          </Button>
        </CardActions>
      </Card>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MediaCard));