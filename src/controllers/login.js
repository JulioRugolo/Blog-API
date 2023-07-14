const { createToken } = require('../auth');
const User = require('../services/user');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.getByUserEmail(email);

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = createToken({
    name: user.displayName, 
    email: user.email,
  });

  return res.status(200).json({ token });
};

module.exports = {
  login,
};