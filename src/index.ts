import http from "http";
import app from "./app";

const port = process.env.PORT || 8080;
const server = http.createServer(app());
server.listen(port, () => {
  console.log(new Date().toISOString());
  console.log(`Success Connected Server : ${port}`);
});

export default app;
