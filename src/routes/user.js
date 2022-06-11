import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

router.get("/", (req, res) =>
  res.send(Object.values(req.context.models.users))
);

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (!req.context.models.users[id]) return res.send({});
  return res.send(req.context.models.users[id]);
});

router.post("/", (req, res) => {
  const id = uuidv4();
  const currentUsers = req.context.models.users;
  const content = req.body.content;
  let user = {
    id,
    content,
  };
  user = {
    [id]: user,
  };
  return res.send({
    ...currentUsers,
    user,
  });
});

export default router;
