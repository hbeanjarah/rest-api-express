import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

router.get("/", (req, res) =>
  res.send(Object.values(req.context.models.messages))
);

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (!models.messages[id]) return res.send({});
  return res.send(models.messages[id]);
});

router.post("/", (req, res) => {
  const id = uuidv4();
  const currentMessages = req.context.models.messages;
  const content = req.body.content;
  let message = {
    id,
    content,
  };
  message = {
    [id]: message,
  };
  return res.send({
    ...currentMessages,
    message,
  });
});

export default router;
