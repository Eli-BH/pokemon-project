const mongoose = require("mongoose");
const Pokemon = require("../models/pokemonModel");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    pokemonDeck: [Pokemon],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
