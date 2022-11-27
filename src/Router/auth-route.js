import { Router } from "express";
import { signUp } from "../controller/auth-Controller.js";

export const authRoute = Router();

authRoute.post("/sign-up", signUp);
