var mongoUri = 'mongodb://localhost:27017/guidemanagement';
var mongoose = require('mongoose');
mongoose.connect(mongoUri);
var User = require('../models/user');
//User = mongoose.model('User');

exports.authenticate = function (req, res) {
  User.find({}, function (err, results) {
    results.forEach(function(element) {
      console.log('username:' + element.username);
    }, this);
    return res.send(results);
  });
};