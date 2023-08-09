import express from "express";
import { registerController } from "../controllers/registerController.js"

//router object create
const router = express.Router()

//rouing 
//register || method post 
router.post("/register",registerController);

export default router;