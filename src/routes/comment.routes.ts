import { Router } from "express";
import { insertNewCommentController } from "../controllers/comments/post-new-comment-controller";
import { patchCommentController } from "../controllers/comments/patch-comment-controller";

const commentRoute = Router();

commentRoute.post("/new-comment/post/:id", insertNewCommentController);
commentRoute.patch("/comment/:id", patchCommentController);

export default commentRoute;
