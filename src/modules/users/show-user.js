const { NotFoundError } = require("../../shared/errors");
const User = require("./_User");

const showUser = async ({ id }) => {
  const user = await User.findById(id).select("-password");

  if (!user) {
    throw new NotFoundError("User topilmadi.");
  };

  return user;
};

module.exports = showUser;