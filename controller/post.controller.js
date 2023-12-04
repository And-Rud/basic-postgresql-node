import db from "../db.js";
import postService from "../service/post.service.js";

class PostController {
  async createPost(req, res) {
    try {
      const { title, content, user_id } = req.body;
      console.log(req.body);
      const newPost = await postService.createPost(title, content, user_id);
      res.json(newPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getPosts(req, res) {
    try {
      const posts = await postService.getPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updatePost(req, res) {
    try {
      const { id, title, content, user_id } = req.body;
      const post = await postService.updatePost(id, title, content, user_id);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async deletePost(req, res) {
    try {
      const id = req.params.id;
      const posts = await postService.deletePost(id);
      res.json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PostController();
