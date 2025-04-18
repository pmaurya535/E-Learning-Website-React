import express from "express";
import { getAllEnrollments } from "../controllers/enrollment.controller.js";

const router = express.Router();
router.get("/", getAllEnrollments);

export default router;
