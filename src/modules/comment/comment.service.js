import express from "express";
import {  addComment, deleteComment,  getAllComments, updateComment } from "./comment.controller.js";


const router = express.Router();

router.post("/", addComment);
router.delete("/:id",deleteComment);
router.put("/:id", updateComment) ;
router.get("/:id", getAllComments)

export default router 