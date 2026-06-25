import { Request, Response, NextFunction } from "express";
import {
  getAllTweets,
  getTweetById,
  createTweet,
  deleteTweet,
} from "../services/tweet.service";

export function getTweets(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(getAllTweets());
  } catch (err) {
    next(err);
  }
}

export function getTweet(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);

    const tweet = getTweetById(id);

    if (!tweet) {
      return res.status(404).json({
        error: "Tweet not found",
      });
    }

    res.json(tweet);
  } catch (err) {
    next(err);
  }
}
export function addTweet(req: Request, res: Response, next: NextFunction) {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({
        error: "Text is required",
      });
    }

    const tweet = createTweet(text, "alice");

    res.status(201).json(tweet);
  } catch (err) {
    next(err);
  }
}

export function removeTweet(req: Request, res: Response, next: NextFunction) {
  try {
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
  } catch (err) {
    next(err);
  }
}
