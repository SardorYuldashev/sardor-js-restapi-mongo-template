const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../../shared/errors');
const config = require('../../shared/config');
const User = require('./_User');

const loginUser = async ({ username, password }) => {
  const existing = await User.findOne({ username });

  if (!existing) {
    throw new UnauthorizedError('Username yoki password xato');
  };

  if (existing.is_deleted) {
    throw new UnauthorizedError("Profil o'chirib tashlangan");
  };

  const match = await compare(password, existing.password);

  if (!match) {
    throw new UnauthorizedError('Username yoki password xato');
  };

  const token = jwt.sign(
    { user: { id: existing._id } },
    config.jwt.secret,
    { expiresIn: '12h' }
  );

  return token;
};

module.exports = loginUser;