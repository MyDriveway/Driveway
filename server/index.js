require('dotenv/config');

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Driveways = './models/driveways.js';

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_API
})
const app = express();
app.use(bodyParser.json());

// connect to db
mongoose.connect(process.env.MONGO_URL, (err, db) => {
  if(err) console.error(err);
  
  console.log("connected to database");
});

// grabs the lat long
googleMapsClient.geocode({address: '91755'}, (err, response) => {
    if(!err) console.log(response.json.results[0].geometry.location)
  }
);

app.use(express.static(path.join(__dirname +'./../'))); //serves the index.html

app.post('/searchAddress', (req, res) => {
  // find the address
  // check whether it's a valid address search using google maps?
  // get the result back from google maps and search the 'address' through
  // the db and return back the result...whether it being empty...an array of objects..or one object?
  console.log(req.body);
  Driveways.find(req.body, (error, data) => {
    console.log('inside find', data);
    if(error) return res.status(500).send(error);
    
    res.status(200).send(data);
  })
})

app.listen(3000, () => {
  console.log('Listening on 3000...');
})