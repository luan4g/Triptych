import express from "express";

import UsersController from "./controllers/UsersController";
import PostsController from "./controllers/PostsController";

const usersController = new UsersController();
const postsController = new PostsController();

const routes = express.Router();

routes.post("/", usersController.store);
routes.post("/create", usersController.create);
routes.get("/home", usersController.index);

routes.post("/:user_id/new-post", postsController.create);
routes.put("/:user_id/:post_id", postsController.update);
routes.get("/:user_id", postsController.index);

export default routes;
