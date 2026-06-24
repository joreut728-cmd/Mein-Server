import { Request, Response } from "express";
import {
  getAllTweets,
  getTweetById,
} from "../services/tweet.service";

export function getTweets(
  req: Request,
  res: Response
) {
  res.json(getAllTweets());
}

export function getTweet(
  req: Request,
  res: Response
) {
  const id = Number(req.params.id);

  const tweet = getTweetById(id);

  if (!tweet) {
    return res.status(404).json({
      error: "Tweet not found",
    });
  }

  res.json(tweet);
}