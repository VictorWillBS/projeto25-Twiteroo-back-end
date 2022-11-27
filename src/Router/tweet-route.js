import { Router } from "express";
import { allTweets, post, userTweets } from "../controller/tweet-controller.js";

const tweetRouter = Router();

tweetRouter.post("/tweets", post);

tweetRouter.get("/tweets/:username", userTweets);

tweetRouter.get("/tweets", allTweets);

export default tweetRouter;
