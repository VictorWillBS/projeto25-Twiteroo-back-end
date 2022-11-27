class Database {
  constructor() {
    this.users = {};
    this.tweets = [];
  }

  addUsuario(username, avatar ) {
    
    return (this.users[username] = avatar);
  }
  addTweet(tweet) {
    this.tweets.push(tweet);
  }
  getTweets(page) {
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    if (this.tweets.length <= 10) {
      return this.tweets.reverse();
    }

    return this.tweets.reverse().slice(start, end);
  }
  getUserTweets(username) {
    return this.tweets.filter((t) => t.username === username);
  }
}

export default Database;
