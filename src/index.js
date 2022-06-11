import "dotenv/config";
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import models from "./models/index.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/**
 * Application level middleware
 */

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.get("/users", (req, res) => {
  return res.send(Object.values(models.users));
});

app.get("/user/:id", userByIdPermission, (req, res) => {
  const { id } = req.params;
  if (!models.users[id]) return res.send({});
  console.log("is called");
  return res.send(models.users[id]);
});

app.get("/message/:id", (req, res) => {
  const { id } = req.params;
  if (!models.messages[id]) return res.send({});
  return res.send(models.messages[id]);
});

app.get("/messages", (req, res) => {
  return res.send(Object.values(models.messages));
});

app.post("/messages", (req, res) => {
  const id = uuidv4();
  const content = req.body.content;
  let message = {
    id,
    content,
  };

  message = {
    [id]: message,
  };
  return res.send(message);
});

/**
 * Middleware
 */

function logger(req, res, next) {
  console.log("Activity log before next ...");
  next();
  console.log("Activity log after next ...");
}

function userByIdPermission(req, res, next) {
  console.log("userByIdPermission log before next ...");
  if (req.params.id == 0) next("route");
  else next();
  console.log("userByIdPermission log after next ...");
}
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
