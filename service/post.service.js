import db from "../db.js";

class PostService {
  async createPost(title, content, user_id) {
    const newPost = await db.query(
      `INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`,
      [title, content, user_id]
    );
    return newPost.rows[0];
  }

  async getPosts() {
    const posts = await db.query(`select * from post`);
    return posts.rows;
  }

  async updatePost(id, title, content, user_id) {
    const post = await db.query(
      `UPDATE post set title=$1, content=$2, user_id=$3 where id=$4 RETURNING *`,
      [title, content, user_id, id]
    );
    return post.rows;
  }

  async deletePost(id) {
    const posts = await db.query(`DELETE FROM post where id = $1`, [id]);
    return posts.rows;
  }
}

export default new PostService();
