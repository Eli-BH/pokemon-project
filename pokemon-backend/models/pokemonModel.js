const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
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
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
