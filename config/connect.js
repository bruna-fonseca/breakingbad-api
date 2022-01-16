const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/BreakingBad';
const DB_NAME = 'BreakingBad';

const Connect = () => 
  MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

module.exports = Connect;