const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

//@desc Auth user & get token
//@route POST /api/users/login
//@access Public

const authUser = asyncHandler(async (req, res) => {
  //destructure email and password from the request body
  const { email, password } = req.body;

  // check if the users email is alread in the db
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      pokemonDeck: user.pokemonDeck,
      token: generateToken(user._id),
    });
  } else {
    //throw error if user is not found
    res.status(401);
    throw new Error("Invalid Email or password");
  }
});

//@desc Register a new User
//@route POST /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  //destructure the name, email, password from reqeust
  const { username, email, password } = req.body;

  //check if the user email already exists in the database
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400); //user already exists
    throw new Error("User with that email already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      pokemonDeck: user.pokemonDeck,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

// @desc  user profile
// @route PUT /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      username: user.name,
      email: user.email,
      pokemonDeck: user.pokemonDeck,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//@desc add pokemon to user deck
//@route PUT /api/user/profile
//@acess Private

const addPokemon = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  //added a max to the amount of pokemon allowed in desk

  if (user) {
    const pokemon = {
      id: req.body.id,
      pokemonName: req.body.pokemonName,
      type0: req.body.type0,
      type1: req.body.type1,
      sprite: req.body.sprite,
      height: req.body.height,
      weight: req.body.weight,
      baseExperience: req.body.baseExperience,
      baseStat0: req.body.baseStat0,
      baseStat1: req.body.baseStat1,
      baseStat2: req.body.baseStat2,
      baseStat3: req.body.baseStat3,
      baseStat4: req.body.baseStat4,
      baseStat5: req.body.baseStat5,
      habitat: req.body.habitat,
      flavorText0: req.body.flavorText0,
      flavorText1: req.body.flavorText1,
    };

    //check if the pokemon already exists in the deck
    let pokemonExists = user.pokemonDeck.some(
      (pokemon) => pokemon.id === req.body.id
    );

    //if the pokemon exists, dont add it
    //else, add it
    if (pokemonExists) {
      return res.status(400);
    } else {
      user.pokemonDeck.push(pokemon);
    }

    //limits the deck to 25 cards
    if (user.pokemonDeck.length >= 26) {
      user.pokemonDeck.pop();
    }

    await user.save();
    res.status(201).json({ message: "Pokemon added to deck" });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const deletePokemon = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.pokemonDeck = user.pokemonDeck.filter(
      (deck) => deck.id != req.body.id
    );

    await user.save();
    res.status(202).json({ message: `${req.body.id} deleted from deck` });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

module.exports = {
  registerUser: registerUser,
  authUser: authUser,
  getUserProfile: getUserProfile,
  addPokemon: addPokemon,
  deletePokemon: deletePokemon,
};
