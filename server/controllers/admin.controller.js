// server/controllers/admin.controller.js

import { User } from "../models/user.model.js";

// ✅ Get All Users (Admin purpose)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Don't send password
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};
