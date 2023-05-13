import express from "express";
import {addCar,getAllCar,updateStatusCar,deleteThiscar,getCarById,editCarById,deleteThiscarPhotos,getCarBySearch,getCarByFilter,updateStatusRentCar} from "../ctr/car.js";

const router = express.Router();
router.post("/addcar", addCar);
router.get("/allCar", getAllCar);
router.get("/getCarById/:id", getCarById);
router.put("/editCarById", editCarById);
router.put("/updateStatusCar", updateStatusCar);
router.put("/updateStatusRentCar", updateStatusRentCar);
router.delete("/deleteThiscar/:id", deleteThiscar);
router.delete("/deleteThiscarPhotos/:id", deleteThiscarPhotos);
router.get("/getCarBySearch", getCarBySearch);
router.get("/getCarByFilter/:types/:seats/:brands", getCarByFilter);



export default router;