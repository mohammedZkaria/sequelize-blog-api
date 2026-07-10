import express from "express";
import { addPost, deletePost } from "./post.controller.js";

const router = express.Router();

router.post("/", addPost);
// router.get("/",getAllPosts);
// router.get("/:id",getPostByID);
// router.put("/:id",updatePost);
router.delete("/:id",deletePost);

export default router;
