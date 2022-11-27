import { create } from "../services/auth-Services.js";

export function signUp(req, res) {
  const userData = req.body;

  create(userData);

  res.status(200).send("OK deu tudo certo");
}
