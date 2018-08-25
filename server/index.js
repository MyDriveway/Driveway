require('dotenv/config');

const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Driveways = require('./models/driveways.js');
const routes = require('./routes')
const userController = require('./controller/userController');


const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_API
})

// connect to db
mongoose.connect(process.env.MONGO_URL, (err, db) => {
  if(err) console.error(err);
  
  console.log("connected to database");
});

app.use(express.static(path.join(__dirname +'./../'))); //serves the index.html
app.use(bodyParser.json())
app.use(cookieParser());

app.get('/checkForSession', userController.checkForSession);
app.get('/endSession', userController.endSession);
app.post('/signup', userController.createAccount, userController.setSSIDCookie, userController.startSession);
app.post('/login', userController.attemptLogin, userController.setSSIDCookie, userController.startSession);

routes(app)

app.post('/searchAddress', (req, res) => {
  /* NOTE: req.body holds an object that contains the user's input from the search bar */
    // find the address
    // check whether it's a valid address search using google maps?
    // get the result back from google maps and search the 'address' through
    // the db and return back the result...whether it being empty...an array of objects..or one object?
    // check if req.body has a key of address, if it does do the geosearch
  if(req.body.hasOwnProperty('address')){
    googleMapsClient.geocode(req.body, (err, response) => {
      if(!err) console.log(response.json.results[0].geometry.location)
      
      const coords = response.json.results[0].geometry.location;
  
      Driveways.aggregate(
        [
          {
            $geoNear: {
              near: {
                type: 'Point',
                coordinates: [parseFloat(coords.lng), parseFloat(coords.lat)]
              },
              distanceField: 'dist',
              includeLocs: 'dist.location',
              maxDistance: parseFloat(8050),
              spherical: true,
            }
          }
        ], (err, result) => {
          if(err) return res.status(500).send(err);
  
          res.send(JSON.stringify(result));
        }
      )
    });
  }else {
    console.log('inside post request', req.body);
    // if not, just return the result
    Driveways.find(req.body, (error, data) => {
      if(error) return res.status(500).send(error);
      
      res.status(200).json(data);
    })
  }
})

app.use((err, req, res, next) => {
  console.log(err);
})

app.listen(3000, () => {
  console.log('Listening on 3000...');
})