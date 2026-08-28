import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { sendOTP, verifyOTP, loginUser, logoutUser, getUserProfile, updateUserProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/sendOTP', sendOTP);
router.post('/verifyOTP', verifyOTP);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router;