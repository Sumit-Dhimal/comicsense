import express from "express";
import { sendOTP, verifyOTP, loginUser, logoutUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/sendOTP', sendOTP);
router.post('/verifyOTP', verifyOTP);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;