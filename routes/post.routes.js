import Router from "express";
import postController from "../controller/post.controller.js";

const router = new Router();

router.post("/post", postController.createPost);
router.get("/post", postController.getPosts);
router.put("/post", postController.updatePost);
router.delete("/post/:id", postController.deletePost);

export default router;
