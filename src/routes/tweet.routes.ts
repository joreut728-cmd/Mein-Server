import { Router } from "express";

import {
  getTweets,
  getTweet,
  addTweet,
  removeTweet,
} from "../controllers/tweet.controller";

const router = Router();

router.get("/", getTweets);

router.get("/:id", getTweet);

router.post("/", addTweet);

router.delete("/:id", removeTweet);

export default router;