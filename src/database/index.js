const mogoose = require('mongoose');

mogoose.connect('mongodb://localhost/noderest', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mogoose.Promise = global.Promise;

module.exports = mogoose;
