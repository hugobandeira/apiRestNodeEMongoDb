const Post = require('../models/Post');


const store = async (req, res) => {
  try {
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;
    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image
    });
    return res.json(post);
  } catch  (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

const index = async (req, res) => {
  const posts = await Post.find().sort('-createdAt');
  return res.json(posts);
};

module.exports = {
  index,
  store
};
