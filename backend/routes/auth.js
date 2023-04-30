import express from "express";
import {login,register} from "../ctr/auth.js";

const router = express.Router();
router.post("/login", login);
router.post("/register", register);
// router.get("/getProfile", getProfile);

export default router;