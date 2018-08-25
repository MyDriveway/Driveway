const User = require('../models/userSchema');
const Session = require('../models/sessionSchema')

module.exports = {
  //creates a new user schema and saves to db
  createAccount: (req, res, next) => {
    const newUser = new User(req.body);
    newUser.save((err, response) => {
      if (err) next(err);
      else {
        res.locals = response._id;
        next();
      }
    })
  },

  // searches db by username, runs password through bcrypt to compare
  attemptLogin: (req, res, next) => {
    User.findOne({username: req.body.username}, function (err, result) {
      if (err) {
        next(err);
      } else {
        if (!result) res.sendStatus(404);
        else {
          result.checkPassword(req.body.password)
          .then(function(success) {
            if (success) {
              res.locals = result._id;   
              next();
            }                                  
          })
          .catch(function(err) { 
            next(err);
          })
        }
      }
    })
  },

  // creates cookie with user id from schema
  setSSIDCookie: (req, res, next) => {
    res.cookie('ssid', res.locals, { httpOnly: true });
    res.sendStatus(200);
    next();
  },

  // create a session
  startSession: (req, res, next) => {
    const newSession = new Session({
      cookieId: res.locals
    });
    newSession.save((err, result) => {
      if (err) {
        next(err);
      }
    })
  },

  checkForSession: (req, res, next) => {
    //currently only accounts for there being a single cookie in req.cookies
    if (req.cookies) {
      Session.findOne({cookieId: req.cookies.ssid}, (err, result) => {
        if (err) next(err);
        else if (result) {
          res.sendStatus(200);
        } else {
          res.sendStatus(404);
        }
      })
    }
  },

  // On user logout, delete their session from the database. There can be multiple sessions
  // for multiple users, but for now if someone logs out, we will remove everyone's session
  endSession: (req, res, next) => {
    Session.deleteMany({}, (err, result) => {
      if (err) next(err);
      res.sendStatus(200);
    })
  }
} 