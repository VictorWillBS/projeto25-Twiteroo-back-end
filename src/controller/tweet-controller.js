import {
  getAllTweets,
  getUserTweets,
  insert,
} from "../services/tweet-Services.js";

export function post(req, res) {
  const tweetData = req.body;

  insert(tweetData);
  res.status(201).send("OK, seu tweet foi criado");
}

export function userTweets(req, res) {
  const { username } = req.params;

  const tweetsDoUsuario = getUserTweets(username);

  res.status(200).send(tweetsDoUsuario);
}

export function allTweets(req, res) {
  const { page } = req.query;

  if (page && page < 1) {
    throw{code:'Bad_Request',message:"Numero de páginas Inválido"}
    return;
  }
  const tweets = getAllTweets(page);

  res.status(200).send(tweets);
}
