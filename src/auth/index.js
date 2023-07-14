const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const JWT_CONFIG = {
  algorithm: 'HS256',
};

const validateToken = (token) => jwt.verify(token, secret);

const createToken = (payload) => jwt.sign(payload, secret, JWT_CONFIG);

module.exports = { validateToken, createToken };