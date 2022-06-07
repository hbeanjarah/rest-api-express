import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();

app.use(cors);

app.get("/", (req, res) => {
  console.log("req", req);
  res.send("Hello there");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
