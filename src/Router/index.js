import { Router } from "express";
import { authRoute } from "./auth-route.js";
import tweetRouter from "./tweet-route.js";
const router = Router();

router.use(authRoute);
router.use(tweetRouter);

export default router;
