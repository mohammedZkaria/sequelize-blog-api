import express from "express";
import { addPost, deletePost, getPostAndAllComments } from "./post.controller.js";

const router = express.Router();

router.post("/", addPost);
router.get("/",getPostAndAllComments);
// router.get("/:id",getPostByID);
// router.put("/:id",updatePost);
router.delete("/:id",deletePost);

export default router;
