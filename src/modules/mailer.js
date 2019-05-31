const nodemailer = require('nodemailer');
const {host, port, user, pass} = require('../config/mail');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');

const transport = nodemailer.createTestAccount({
  host,
  port,
  auth: {
    user, pass,
  }
});

transport.use('compile', hbs({
  viewEngine: 'handlebars',
  viewPath: path.resolve('./src/resouces/mail'),
  extName: '.html'
}));

module.exports = transport;
