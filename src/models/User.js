const mogoose = require("../database/index");

const bcrypt = require('bcryptjs');

const UserSchema = new mogoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});


UserSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 10);
  next()
});

const User = mogoose.model("User", UserSchema);

module.exports = User;
