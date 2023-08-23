import express from "express";
const router = express.Router();
import {
  authUser,
  userLogout,
  getUserProfile,
  updateUserProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/auth", authUser);
router.post("/register", registerUser);
router.post("/logout", userLogout);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

export default router;

// - **POST /api/users/register** - Register a user
// - **POST /api/users/auth** -Authenticate a user and get a token
// - **POST /api/users/logout** - Logout user and clear cookie
// - **GET /api/users/profile** - Get user profile
// - **PUT /api/users/profile** - Update profile
