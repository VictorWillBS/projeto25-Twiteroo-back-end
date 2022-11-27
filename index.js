import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import { seed } from "./src/databases/seed.js";
import router from "./src/Router/index.js";
import 'express-async-errors'
import errorHandle from "./src/middleware/erroHandle.js";

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandle)
seed()
app.listen(5000, () => {
  console.log(chalk.bold.blue("Servidor funfando de boas!!!"));
});
