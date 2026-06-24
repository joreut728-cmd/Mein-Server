import { Router } from "express";

import {
  getTweets,
  getTweet,
} from "../controllers/tweet.controller";

const router = Router();

router.get("/", getTweets);

router.get("/:id", getTweet);

export default router;