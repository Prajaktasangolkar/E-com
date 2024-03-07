const express = require("express");
const {
  createUser,
  loginUser,
  checkUser,
  checkAuth,
  verifyEmail,
  signout,
} = require("../controller/Auth");
const passport = require("passport");
const router = express.Router();

router
  .post("/signup", createUser)
  .post("/login", passport.authenticate("local"), loginUser)
  .get("/check", passport.authenticate("jwt"), checkAuth)
  .post("/verifyEmail", verifyEmail)
  .get("/signout", signout);
exports.router = router;
