const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.NODE_ATLASDATABASE;

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  // once the connection is opend do...
  console.log('MongoDB database connection established successfully'); // we cen put and read to/from database using models (schema)!
});

module.exports = mongoose;
