const Post = require('../models/Post');

const store = async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    post.likes += 1;
    await post.save;
    return res.json(post);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  store
};
