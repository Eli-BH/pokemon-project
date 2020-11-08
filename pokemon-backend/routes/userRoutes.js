const express = require("express");
const {
  registerUser,
  authUser,
  getUserProfile,
  addPokemon,
  deletePokemon,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .post(protect, addPokemon)
  .put(protect, deletePokemon);

module.exports = router;
