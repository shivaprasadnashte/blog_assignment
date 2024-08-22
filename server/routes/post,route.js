import express from "express";
import authMiddleware from "../middleware/authMiddleware.js"; // Assuming you have JWT auth middleware
import {
  createPost,
  deletePost,
  getPosts,
  searchPosts,
  updatePost,
} from "../controllers/post.controller.js";

const postRouter = express.Router();

postRouter.post("/create", authMiddleware, createPost);
postRouter.put("/:postId", authMiddleware, updatePost);
postRouter.delete("/:postId", authMiddleware, deletePost);
postRouter.get("/search", searchPosts);
postRouter.get("/", getPosts);

export default postRouter;
