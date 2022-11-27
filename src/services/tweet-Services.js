import Tweet from "../class/tweet.js";
import db from "../databases/database.js";

export function insert({ tweet, username }) {
  if (!username || !tweet) {
    throw{code:'Bad_Request',message:"Todos os campos são obrigatórios!"}

  }

  const avatar = db.users[username];

  const tweetCreated= new Tweet(username, avatar, tweet);
  db.addTweet(tweetCreated);
  console.log(db.tweets);
  return;
}

export function getUserTweets(username) {
  return db.getUserTweets(username);
}

export function getAllTweets(page) {
  return db.getTweets(page||1);
}
