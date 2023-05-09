import express from "express";
import {addRent,getAllRent,getRentById,distributionAndUpdateStatus,getAllRentConfirm,fineAndUpdateStatus,getAllHistory,distributionAndUpdateStatusRejected} from "../ctr/rent.js";

const router = express.Router();

router.post("/addrent", addRent);
router.get("/getallrent", getAllRent);
router.get("/getAllRentConfirm", getAllRentConfirm);
router.get("/getRentById/:id", getRentById);
router.put("/distributionAndUpdateStatus/:id", distributionAndUpdateStatus);
router.put("/distributionAndUpdateStatusRejected/:id/:fname", distributionAndUpdateStatusRejected);
router.put("/fineAndUpdateStatus/:id", fineAndUpdateStatus);
router.get("/getAllHistory", getAllHistory);

export default router;