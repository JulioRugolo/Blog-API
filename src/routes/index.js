const express = require('express');
const loginRoutes = require('./login');
const userRoutes = require('./user');
const categoryRoutes = require('./categories');

const router = express.Router();

router.get('/', (_request, response) => {
  response.send();
});

router.use('/login', loginRoutes);
router.use('/user', userRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
