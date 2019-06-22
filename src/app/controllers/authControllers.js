const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const crypto = require('crypto');


router.post('/register', async (req, res) => {
  try {
    const {email} = req.body;
    if (await User.findOne({email}))
      return res.status(400).send({error: 'User already exists'});

    const user = await User.create(req.body);
    user.password = undefined;

    return res.send({
      user,
      token: generateToken({
        id: user.id
      })
    });
  } catch (e) {
    console.log(e);
    return res.status(400)
      .send({
        error: 'Registration failed'
      });
  }
});


router.post('/authenticate', async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email}).select('+password');

  if (!user)
    return res.status(400).send({error: 'User not fount!'});

  if (!await bcrypt.compare(password, user.password))
    return res.status(400).send({error: 'Invalid Password!'});

  user.password = undefined;

  res.send({
    user,
    token: generateToken({
      id: user.id
    })
  });

});

router.post('/forgot_password', async (req, res) => {
  const { email } = req.body;
  console.log(email);

  const user = User.findOne({ email });

  if (!user)
    return res.status(400).send({
      error: 'User not found!',
    });

  const token = crypto.randomBytes(20).toString('hex');

  const now = new Date();

  now.setHours(now.getHours() + 1);

  await User.findByIdAndUpdate(user.id, {
    '$set': {
      passwordResetToken: token,
      passwordResetExpires: now
    }
  });

  console.log(token, now);
});

const generateToken = (params = {}) => {
  return jwt.sign({
      params
    },
    authConfig.secret, {
      expiresIn: 86400
    });

}
module.exports = app => app.use('/auth', router);
