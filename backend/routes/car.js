import express from "express";
import {addCar,getAllCar,updateStatusCar,deleteThiscar,getCarById,editCarById,deleteThiscarPhotos,getCarBySearch} from "../ctr/car.js";

const router = express.Router();
router.post("/addcar", addCar);
router.get("/allCar", getAllCar);
router.get("/getCarById/:id", getCarById);
router.put("/editCarById", editCarById);
router.put("/updateStatusCar", updateStatusCar);
router.delete("/deleteThiscar/:id", deleteThiscar);
router.delete("/deleteThiscarPhotos/:id", deleteThiscarPhotos);
router.get("/getCarBySearch", getCarBySearch);


export default router;