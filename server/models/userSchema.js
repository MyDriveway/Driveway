const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type:String, require: true}
})

const SALT_WORK_FACTOR = 10;

// automatically encrypts password
userSchema.pre('save', function(next) {
  const that = this;
  bcrypt.hash(that.password, SALT_WORK_FACTOR)
  .then(function(hash) {
    that.password = hash;
    next();
  }).catch(function(err) {
    next(err);
  })
})

// check user input password with actual password 
userSchema.methods.checkPassword = function(password) {
  const that = this;
  return new Promise(function(resolve, reject) {
    bcrypt.compare(password, that.password)
    .then(function(result) {
      resolve(result);
    }).catch(function(err) {
      reject(err);
    });
  });
};

module.exports = mongoose.model('user', userSchema);
