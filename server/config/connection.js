const mongoose = require("mongoose");
//const { MongoClient } = require('mongodb');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sleepyhead2Pro",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
