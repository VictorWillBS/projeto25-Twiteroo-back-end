import Usuario from "../class/usuario.js";
import db from "../databases/database.js";

export function create({ username, avatar }) {
  if (!username || !avatar) {
  throw{code:'Bad_Request',message:"Todos os campos são obrigatórios!"}
  }

  const usuario = new Usuario(username, avatar);
  db.addUsuario(usuario.username, usuario.avatar);
  console.log(db);
  return;
}
