import "dotenv/config";
import express from "express";
import cors from "cors";
import models from "./models/index.js";
import routes from "./routes/index.js";
const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/**
 * Application level middleware
 */

app.use(logger);

app.use(authContext);

app.use("/session", routes.session);

app.use("/messages", routes.message);
app.use("/users", routes.user);

/**
 * Middleware
 */

function logger(req, res, next) {
  console.log("Activity log before next ...");
  next();
  console.log("Activity log after next ...");
}

function authContext(req, res, next) {
  req.context = {
    models,
    me: models.users[2],
  };
  next();
}

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
