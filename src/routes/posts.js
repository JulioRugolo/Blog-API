const express = require('express');
const { createPost } = require('../controllers/post');
const { tokenValidation } = require('../middleware/tokenValidator');

const router = express.Router();

router.post('/', tokenValidation, createPost);

module.exports = router;
