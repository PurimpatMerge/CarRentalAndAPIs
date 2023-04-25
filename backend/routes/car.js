import express from "express";
import {addCar,getAllCar,updateStatusCar,deleteThiscar} from "../ctr/car.js";

const router = express.Router();
router.post("/addcar", addCar);
router.get("/allCar", getAllCar);
router.put("/updateStatusCar", updateStatusCar);
router.delete("/deleteThiscar/:id", deleteThiscar);


export default router;