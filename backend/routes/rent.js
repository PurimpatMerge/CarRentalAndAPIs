import express from "express";
import {addRent,getAllRent,getRentById,distributionAndUpdateStatus,getAllRentConfirm} from "../ctr/rent.js";

const router = express.Router();

router.post("/addrent", addRent);
router.get("/getallrent", getAllRent);
router.get("/getAllRentConfirm", getAllRentConfirm);
router.get("/getRentById/:id", getRentById);
router.put("/distributionAndUpdateStatus/:id", distributionAndUpdateStatus);

export default router;