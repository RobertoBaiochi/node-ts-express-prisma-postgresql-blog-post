import { Router } from "express";
import { insertNewCommentController } from "../controllers/comments/post-new-comment-controller";
import { patchCommentController } from "../controllers/comments/patch-comment-controller";
import { deleteCommentController } from "../controllers/comments/delete-comment-controller";

const commentRoute = Router();

commentRoute.post("/new-comment/post/:id", insertNewCommentController);
commentRoute.patch("/comment/:id", patchCommentController);
commentRoute.delete("/comment/:id", deleteCommentController);

export default commentRoute;
