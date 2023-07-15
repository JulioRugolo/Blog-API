const { validateToken } = require('../auth');

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) { 
    return res.status(401).json({ message: 'Token not found' }); 
  }

  try {
    let authBearer;
  if (authorization.includes('Bearer')) {
    const array = authorization.split(' ')[1];

    authBearer = array;
  } else {
    authBearer = authorization;
  }

    const token = await validateToken(authBearer);
    req.user = token;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  tokenValidation,
};
