const mongoose = require('../../database/index');

const PostSchema = new mongoose.Schema({
  author: String,
  place: String,
  description: String,
  hashtags: String,
  image: String,
  likes: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true
});
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;

