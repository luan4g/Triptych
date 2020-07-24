import { Request, Response } from "express";
import knex from "../database/connection";

class PostsController {
  async create(req: Request, res: Response) {
    const { image, description } = req.body;
    const { user_id } = req.params;

    const post = {
      user_id,
      image,
      description,
    };

    await knex("posts").insert(post);

    return res.json({ post });
  }

  async index(req: Request, res: Response) {
    const { user_id } = req.params;

    const posts = await knex("posts").where("user_id", user_id).select("*");

    return res.json(posts);
  }

  async update(req: Request, res: Response) {
    const { user_id, post_id } = req.params;

    let [post] = await knex("posts")
      .where("user_id", user_id)
      .andWhere("id", post_id)
      .select("*");

    const newlike = post.likes++;

    const newPost = {
      likes: newlike,
      ...post,
    };

    await knex("posts")
      .where("user_id", user_id)
      .andWhere("id", post_id)
      .update(newPost);

    return res.json(newPost);
  }
}

export default PostsController;
