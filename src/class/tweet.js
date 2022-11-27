import Usuario from "./usuario.js";

class Tweet extends Usuario {
  constructor(username, avatar, tweet) {
    super(username, avatar);
    this.tweet = tweet;
  }
}

export default Tweet;
