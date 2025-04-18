// server/routes/admin.route.js

import express from "express";
import { getAllUsers } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/users", getAllUsers);

export default router;
