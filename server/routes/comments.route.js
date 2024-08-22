import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addComment, deleteComment, getCommentById, updateComment } from "../controllers/comments.controllers.js";

const commentRouter = express.Router();

commentRouter.post("/add", authMiddleware, addComment);
commentRouter.delete("/:commentId", authMiddleware, deleteComment);
commentRouter.put("/:commentId", authMiddleware, updateComment);
commentRouter.get("/:commentId", getCommentById);

export default commentRouter;
