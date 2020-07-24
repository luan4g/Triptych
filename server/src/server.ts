import AppController from "./app";

const server = AppController();

try {
  server.middlewares();
  server.router();
} catch (error) {
  console.log("> [Server] -> Error: ", error);
}

server.app.listen(3333, () => {
  console.log("> [Server] -> Server is Runnning");
});
