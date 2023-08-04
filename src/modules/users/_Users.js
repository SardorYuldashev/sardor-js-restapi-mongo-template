const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    last_name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    username: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      required: true,
      default: false
    },
  },
  {
    versionKey: false,
    timestamps: false
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;