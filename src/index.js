import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();

app.use(cors());

let users = {
  1: {
    id: "1",
    username: "Robin Wieruch",
  },
  2: {
    id: "2",
    username: "Dave Davids",
  },
};

let messages = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1",
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2",
  },
};

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.get("/users", (req, res) => {
  return res.send(Object.values(users));
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  if (!users[id]) return res.send({});
  return res.send(users[id]);
});

app.get("/message/:id", (req, res) => {
  const { id } = req.params;
  if (!messages[id]) return res.send({});
  return res.send(messages[id]);
});

app.get("/messages", (req, res) => {
  return res.send(Object.values(messages));
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
