import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import Verification from "../models/validation.model.js";
import generateToken from "../utils/token.service.js";
import sendVerification from "../utils/email.service.js";
import crypto from "crypto";
import bcrypt from "bcryptjs";

// @desc    sendOTP
// route    POST  /api/users/sendOTP
// @access  Public
const sendOTP = asyncHandler(async(req, res) => {
  const {username, email, password} = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  // check user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // generate six-digit verification code
  const verificationCode = crypto.randomInt(100000, 999999).toString();

  // hash verification code
  const hashedCode = await bcrypt.hash(verificationCode, 10);

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Expirest after 5 minutes
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await Verification.findOneAndUpdate(
    // Find a Verification document whose email matches this email
    { email },

    //  This is the data that Mongoose will update if it finds a matching document.
    {
      username,
      email,
      password: hashedPassword,
      verificationCode: hashedCode,
      expiresAt
    }, 

    {
      upsert: true, // Update if the document exists; otherwise, create it.
      returnDocument: "after", // it makes sure to return the updated document
    }
  );

  // send email here
  await sendVerification(email, verificationCode);

  res.status(200).json({
    message: "Verification code send to you email",
  });
});



// @desc      verifyOTP
// @route     POST  /api/users/verifyOTP
// @access    Public
const verifyOTP = asyncHandler(async(req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    res.status(400);
    throw new Error("Please provide email and otp");
  }

  // find temporary verification data
  const verification = await Verification.findOne({ email });

  if (!verification) {
    res.send(400);
    throw new Error("Verification code not found or expired.");
  }

  // check if OTP has expired
  if (verification.expiresAt < new Date()) {
    await Verification.deleteOne({ email });

    res.status(400);
    throw new Error("Verification code has expired");
  }

  // compare entered OTP with hashed OTP
  const isOTPValid = await bcrypt.compare(otp, verification.verificationCode);

  if (!isOTPValid) {
    res.status(400);
    throw new Error("Invalid verification code.");
  }

  // if OTP is valid then create a new User (copy data from temporary)
  const user = await User.create({
    username: verification.username,
    email: verification.email,
    password: verification.password,
  });

  // delete temporary verification data
  await Verification.deleteOne({ email });

  // generate JWT TOKEN
  generateToken(res, user._id);

  res.status(201).json({
    message: "Email verified and user registered successfully",
    user: {
      _id: user._id,
      username: user.username,
      email: user.email,
    },
  });
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
  if (!user || !(await user.comparePassword(password))) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  // Generate JWT cookie
  generateToken(res, user._id);

  res.status(200).json({
    message: "login successfull",
    user: {
      _id: user._id,
      name: user.username,
      email: user.email,
    }
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

// @desc    get user profile
// @route   GET /api/users/profile
// @access  Private
/*
Since this route uses the protect middleware, 
we have access to the user object on the request object. 
We can use that to get the user from the database and send back the user data.
*/
const getUserProfile = asyncHandler(async(req, res) => {

  if (req.user) {
    res.json({
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email,
    });
  }
  else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async(req, res) => {

});


export { sendOTP, verifyOTP, loginUser, logoutUser, getUserProfile, updateUserProfile};