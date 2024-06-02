import { Router } from "express";
import { getAllPostsController } from "./controllers/posts/get-all-post-controller";
import { insertNewPostController } from "./controllers/posts/post-new-post-controller";
import { getPostByIdController } from "./controllers/posts/get-post-by-id-controller";

const router = Router();

router.get("/posts", getAllPostsController);
router.post("/posts", insertNewPostController);
router.get("/posts/:id", getPostByIdController);

export default router;
