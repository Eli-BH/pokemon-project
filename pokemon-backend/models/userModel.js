const mongoose = require("mongoose");
const pokemonSchema = require("../models/pokemonModel");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
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
    pokemonDeck: [
      {
        id: {
          type: Number,
        },
        pokemonName: {
          type: String,
          trim: true,
        },
        type0: {
          type: String,
          trim: true,
        },
        type1: {
          type: String,
          trim: true,
        },
        sprite: {
          type: String,
          trim: true,
        },
        height: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        baseExperience: {
          type: Number,
        },
        baseStat0: {
          type: String,
        },
        baseStat1: {
          type: String,
        },
        baseStat2: {
          type: String,
        },
        baseStat3: {
          type: String,
        },
        baseStat4: {
          type: String,
        },
        baseStat5: {
          type: String,
        },
        habitat: {
          type: String,
        },
        flavorText0: {
          type: String,
        },
        flavorText1: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

//checking if the request password mathches the one in the db
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//hash the password before it's saved
userSchema.pre("save", async function (next) {
  //oly run if the password is new or changed
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
