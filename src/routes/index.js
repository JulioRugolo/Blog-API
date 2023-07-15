const express = require('express');
const loginRoutes = require('./login');
const userRoutes = require('./user');
const categoryRoutes = require('./categories');
const postRoutes = require('./posts');

const router = express.Router();

router.get('/', (_request, response) => {
  response.send();
});

router.use('/login', loginRoutes);
router.use('/user', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/post', postRoutes);

module.exports = router;
