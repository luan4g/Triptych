import express from "express";

import routes from "./routes";

function AppController() {
  const app = express();

  function middlewares() {
    app.use(express.json());
  }

  function router() {
    app.use(routes);
  }

  return {
    app,
    middlewares,
    router,
  };
}

export default AppController;
