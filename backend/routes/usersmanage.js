import express from "express";
import {addUser} from "../ctr/usermanage.js";

const router = express.Router();
router.post("/create", addUser);
// router.post("/view", readUser);
// router.post("/update", updateUser);
// router.post("/delete", deleteUser);

export default router;