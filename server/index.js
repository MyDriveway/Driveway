require('dotenv/config');

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGO_URL, (err, db) => {
  if(err) console.error(err);

  console.log("connected to database");
})

app.use(express.static(path.join(__dirname +'./../'))); //serves the index.html

app.get('/', (req, res, next) => {
  console.log('hey');
})

app.listen(3000, () => {
  console.log('Listening on 3000...');
})