import { Request, Response } from "express";
import {
  getAllTweets,
  getTweetById,
  createTweet,
  deleteTweet,
} from "../services/tweet.service";

export function getTweets(req: Request, res: Response) {
  res.json(getAllTweets());
}

export function getTweet(req: Request, res: Response) {
  const id = Number(req.params.id);

  const tweet = getTweetById(id);

  if (!tweet) {
    return res.status(404).json({
      error: "Tweet not found",
    });
  }

  res.json(tweet);
}
export function addTweet(req: Request, res: Response) {
  const { text } = req.body;

  const tweet = createTweet(text, "alice");

  res.status(201).json(tweet);
}

export function removeTweet(req: Request, res: Response) {
  const id = Number(req.params.id);

  const success = deleteTweet(id);

  if (!success) {
    return res.status(404).json({
      error: "Tweet not found",
    });
  }

  res.json({
    success: true,
  });
}
