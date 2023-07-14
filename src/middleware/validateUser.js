const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const testEmail = regex.test(email);
  return testEmail;
};

const validateUser = (req, res, next) => {
  const { email, password, displayName } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json(
      { message: '"email" must be a valid email' },
    );
  }

  if (password.length < 6) {
    return res.status(400).json(
      { message: '"password" length must be at least 6 characters long' },
    );
  }

  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }

  next();
};

module.exports = validateUser;