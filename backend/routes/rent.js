import express from "express";
import {addRent,getAllRent} from "../ctr/rent.js";

const router = express.Router();

router.post("/addrent", addRent);
router.get("/getallrent", getAllRent);

export default router;