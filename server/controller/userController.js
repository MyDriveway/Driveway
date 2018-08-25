const User = require('../models/userSchema');
const Session = require('../models/sessionSchema')

module.exports = {
  createAccount: (req, res, next) => {
    const newUser = new User(req.body);
    newUser.save((err, response) => {
      if (err) console.log(err);
      else {
        res.locals = response._id;
        next();
      }
    })
  },

  attemptLogin: (req, res, next) => {
    //will only be able to search by username once encrypting included
    User.findOne({username: req.body.username, password: req.body.password}, function (err, result) {
      if (err) {
        next(err);
      } else {
        if (!result) res.sendStatus(404);
        else {
          res.locals = result._id;
          next();
        }
        // result.checkPassword(req.body.password)
        // .then(function(result) {
        //   if (result) {
        //     res.locals = result._id;           
        //     next();
        //   } else next(err);                                  
        // }).catch(function(err) { next(err) })
      }
    })
  },

  setSSIDCookie: (req, res, next) => {
    res.cookie('ssid', res.locals, { httpOnly: true });
    res.sendStatus(200);
    next();
  },

  startSession: (req, res, next) => {
    const newSession = new Session({
      cookieId: res.locals
    });
    newSession.save((err, result) => {
      if (err) {
        console.log(err);
      }
    })
  },

  checkForSession: (req, res, next) => {
    Session.findOne({}, (err, result) => {
      if (result) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    })
  }
} 