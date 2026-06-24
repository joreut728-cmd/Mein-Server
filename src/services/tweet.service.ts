export interface Tweet {
  id: number;
  text: string;
  author: string;
}

const tweets: Tweet[] = [
  {
    id: 1,
    text: "Hallo Twitter",
    author: "alice",
  },
  {
    id: 2,
    text: "Mein erster Tweet",
    author: "bob",
  },
];

export function getAllTweets() {
  return tweets;
}

export function getTweetById(id: number) {
  return tweets.find((tweet) => tweet.id === id);
}
