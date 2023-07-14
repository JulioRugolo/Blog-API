const express = require('express');
const loginRoutes = require('./login');
const userRoutes = require('./user');

const router = express.Router();

router.get('/', (_request, response) => {
  response.send();
});

router.use('/login', loginRoutes);
router.use('/user', userRoutes);

module.exports = router;
