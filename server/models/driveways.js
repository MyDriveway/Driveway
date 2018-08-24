const mongoose = require('mongoose')
const Schema = mongoose.Schema
const drivewaysSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  timeStart: {
    type: String,
    required: true,
  },
  timeEnd: {
    type: String,
    required: true
  },
  rateDay: {
    type: Number,
  },
  rateHour: {
    type: Number,
  },
  image: {
    type: String,
  },
  coordinates: {
    type: [Number], //lat, lng
    index: '2dsphere',
    required: 'true'
  }
})

const Driveways = mongoose.model('driveways', drivewaysSchema)

module.exports = Driveways