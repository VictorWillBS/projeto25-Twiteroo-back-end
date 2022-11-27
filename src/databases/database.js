import Database from "../class/database.js";
import { seed } from "./seed.js";
import dotenv from 'dotenv'
dotenv.config()

const db = new Database()
export default db