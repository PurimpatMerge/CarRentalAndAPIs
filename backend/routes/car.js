import express from "express";
import {addCar} from "../ctr/car.js";

const router = express.Router();
router.post("/addcar", addCar);


export default router;