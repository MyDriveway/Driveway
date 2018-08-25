require('dotenv/config');

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const userController = require('./controller/userController');

mongoose.connect(process.env.MONGO_URL, (err, db) => {
  if(err) console.error(err);
  console.log("connected to driveway database");
})

app.use(express.static(path.join(__dirname +'./../'))); //serves the index.html
app.use(bodyParser.json())
app.use(cookieParser());

app.get('/checkForSession', userController.checkForSession);
app.get('/endSession', userController.endSession);
app.post('/signup', userController.createAccount, userController.setSSIDCookie, userController.startSession);
app.post('/login', userController.attemptLogin, userController.setSSIDCookie, userController.startSession);

routes(app)

app.use((err, req, res, next) => {
  //res.render(err);
})

app.listen(3000, () => {
  console.log('Listening on 3000...');
})