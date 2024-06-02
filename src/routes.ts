import { Router } from "express";
//Posts Controller
import { getAllPostsController } from "./controllers/posts/get-all-post-controller";
import { insertNewPostController } from "./controllers/posts/post-new-post-controller";
import { getPostByIdController } from "./controllers/posts/get-post-by-id-controller";
import { updatePostByIdController } from "./controllers/posts/patch-post-by-id-controller";
import { deletePostByIdController } from "./controllers/posts/delete-post-by-id-controller";

const router = Router();

router.get("/posts", getAllPostsController);
router.post("/posts", insertNewPostController);
router.get("/posts/:id", getPostByIdController);
router.put("/posts/:id", updatePostByIdController);
router.delete("/posts/:id", deletePostByIdController);

export default router;
