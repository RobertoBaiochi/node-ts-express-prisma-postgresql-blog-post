import { Router } from "express";
import { getAllPostsController } from "./controllers/posts-controllers/get-all-post-controller";
import { insertNewPostController } from "./controllers/posts-controllers/post-new-post-controller";

const router = Router();

router.get("/posts", getAllPostsController);
router.post("/posts", insertNewPostController);

export default router;
