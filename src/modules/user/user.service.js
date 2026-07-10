import { getUserByID, search, updateUser } from "./user.controller.js";
import express from "express";


const router = express.Router();

router.put("/:id",updateUser);
router.get("/search",search);
router.get("/:id",getUserByID);

export default router
