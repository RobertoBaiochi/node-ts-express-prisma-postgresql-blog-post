import { Router } from "express";
//Posts Controller
import { getAllPostsController } from "../controllers/posts/get-all-post-controller";
import { insertNewPostController } from "../controllers/posts/post-new-post-controller";
import { getPostByIdController } from "../controllers/posts/get-post-by-id-controller";
import { updatePostByIdController } from "../controllers/posts/patch-post-by-id-controller";
import { deletePostByIdController } from "../controllers/posts/delete-post-by-id-controller";
import { getFilteredPostsController } from "../controllers/posts/get-posts-filter-controller";

const postRoute = Router();

postRoute.get("/posts", getAllPostsController);
postRoute.post("/posts", insertNewPostController);
postRoute.get("/posts/:id", getPostByIdController);
postRoute.put("/posts/:id", updatePostByIdController);
postRoute.delete("/posts/:id", deletePostByIdController);
postRoute.get("/search/posts", getFilteredPostsController);

export default postRoute;
