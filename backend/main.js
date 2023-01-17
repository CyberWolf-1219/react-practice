import Express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import AuthRoute from "./routes/authRoute.js";
import { on_client_connect } from "./helpers/chatServerHelpers.js";

const app = Express();
app.use(Express.json());
app.use(cors());

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: "http://localhost:3000",
  path: "/chat",
});

httpServer.listen(9000, () => {
  console.log(`HTTP SERVER STARTED ON PORT: 9000`);
});

app.get("/", (req, res) => {
  console.log(`NEW SERVER REQ...`);
  res.send("pong");
});

app.use("/auth", AuthRoute);

io.on("connection", (socket) => {
  on_client_connect(io, socket);
});
