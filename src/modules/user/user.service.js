import { updateUser } from "./user.controller.js";
import express from "express";


const router = express.Router();

router.patch("/:id",updateUser);


export default router
