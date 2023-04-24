import express from "express";
import {addCar,getAllCar} from "../ctr/car.js";

const router = express.Router();
router.post("/addcar", addCar);
router.get("/allCar", getAllCar);


export default router;