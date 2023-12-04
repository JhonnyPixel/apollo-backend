import express from "express";
import fileController from "../controller/fileController.js";
const router=express.Router();

router.get('/',fileController.getFiles,(req,res)=>{});

export default router;