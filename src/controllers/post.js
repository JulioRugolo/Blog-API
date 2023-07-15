const postService = require('../services/post');
const { getByUserEmail } = require('../services/user');

const createPost = async (req, res) => {
  try {
    const userId = await getByUserEmail(req.user.email);
    const post = req.body;
    console.log(userId.id);
    const result = await postService.createPost(Number(userId.id), post);
    // console.log(result);
    if (result.message) return res.status(400).json({ message: result.message });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
};