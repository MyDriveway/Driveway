require('dotenv/config');

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const loginController = require('./controller/loginController');

mongoose.connect(process.env.MONGO_URL, (err, db) => {
  if(err) console.error(err);
  console.log("connected to driveway database");
})

app.use(express.static(path.join(__dirname +'./../'))); //serves the index.html
app.use(bodyParser.json())

app.post('/login', loginController.attemptLogin);

routes(app)

app.listen(3000, () => {
  console.log('Listening on 3000...');
})