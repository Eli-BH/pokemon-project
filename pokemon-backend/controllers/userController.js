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

// @desc Update user profile
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

module.exports = {
  registerUser: registerUser,
  authUser: authUser,
  getUserProfile: getUserProfile,
};
