import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

// @desc    register
// route    POST  /api/users/register
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
  const {username, email, password} = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const user = await User.create({
    username,
    email,
    password
  });

  res.status(201).json({
    message: "User registred",
    user: {
      _id: user._id,
      username: user.username,
      email: user.email,
    }
  })
});

// @desc    login
// route    POST  /api/users/login
// @access  Public
const loginUser = asyncHandler(async(req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Provide all required fields");
  }

  const user = await User.findOne({email});

  // compare entered pass and pass in database
  if (!user && !(await user.comparePassword(password))) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  // Generate JWT cookie
  generateToken(res, user._id);

  res.status(200).json({
    _id: user._id,
    name: user.username,
    email: user.email,
  });
});

// @desc    logout
// route    POST  /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async(req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    maxAge: 0,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({
    message: "Logout successfully"
  })
});

export { registerUser, loginUser, logoutUser };