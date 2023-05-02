import express from "express";
import {login,register,getallUser,deleteThisUser,getUserById,editUserById,deleteThisUserPhotos,updateStatusUser} from "../ctr/auth.js";

const router = express.Router();
router.post("/login", login);
router.post("/register", register);
router.get("/getalluser", getallUser);
router.delete("/deletethisuser/:id", deleteThisUser);
router.get("/getuserbyid/:id", getUserById);
router.put("/edituserbyid", editUserById);
router.delete("/deletethisuserphotos/:id", deleteThisUserPhotos);
router.put("/updateStatusUser", updateStatusUser);
export default router;